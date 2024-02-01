<template>
    <ul v-for="invite in invites">
        {{ invite }}
        <button @click = "acceptInvite(invite)">Accept</button>
        <button @click = "declineInvite(invite)">Decline</button>
      </ul>
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