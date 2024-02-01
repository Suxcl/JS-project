<template>
    <div>
      <h3 class="text-xl font-bold mb-4">Invites</h3>
      <ul>
        <li v-for="invite in invites" :key="invite.id" class="mb-4">
          <div class="bg-white rounded-xl shadow-md p-4">
            <div class="flex justify-between items-center">
              <div class="text-lg font-semibold">{{ invite.user_from_id }}</div>
              <div>
                <button @click="acceptInvite(invite)" class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Accept</button>
                <button @click="declineInvite(invite)" class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 ml-2">Decline</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </template>

<script setup lang="ts">
    import type {Invite} from "@prisma/client";
    import { ref } from "vue";
    import { useToast } from "vue-toastification";
    
    const props = defineProps<({
        invites: Invite[];
    })>();
    
    const toast = useToast()
    const invites = ref(props.invites)
    
    const acceptInvite = async (invite: Invite) => {
        // change invite status
        await $fetch(`/api/invites/response`, {
            method: 'POST',
            body: {
                id: invite.id,
                status: 1
            }
        }).then(() => {
            invites.value = invites.value.filter((data) => data.id !== invite.id)
            toast.success("Success, Invite accepted!", {
                timeout: 2000
            })
        })
        // add friend
        await $fetch(`/api/users/friends/addFriend`, {
            method: 'POST',
            body: {
                user1Id: invite.user_from_id,
                user2Id: invite.user_to_id
            }
        })
        window.location.reload()
    }
    const declineInvite = async (invite: Invite) => {
        await $fetch(`/api/invites/response`, {
            method: 'POST',
            body: {
                id: invite.id,
                status: 2
            }
        }).then(() => {
            invites.value = invites.value.filter((data) => data.id !== invite.id)
            toast.info("You declined a invite", {
                timeout: 2000
            })
        })
        window.location.reload()
    }


</script>