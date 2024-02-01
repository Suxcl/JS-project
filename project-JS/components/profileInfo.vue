<template>
    <h3> Profile of {{ user.name }} {{ user.surname }}</h3>
    <p>Production Only - to jest do wyjebania po zrobieniu css'a</p>

    <!-- profilowe pepega -->
    
    <div v-if ="user.id !== logUserId">
        <div v-if="isFriend">
            <p>You are a friend of {{ user.name }}</p>
            <button @click="unfriend()">Unfriend</button>
        </div>
        <div v-else>
            <div v-if="!!logUserId">
                <p>You are not a friend of {{ user.name }}</p>
                <button @click="sentInvite()">Add Friend</button>
            </div>
        </div>
    </div>
    <!-- możliwości zalogowanego użytkownika -->
    <div v-else>
        <!-- change profilowe -->

        <!-- zmiana danych -->
    </div>

</template>

<script lang="ts" setup>
    import type {User} from "@prisma/client";
    import { ref } from "vue";
    import { useToast } from "vue-toastification";
    const props = defineProps<({
        user: User;
    })>();
    let tmp_id = getLoggedUserId()
    if(tmp_id === null) tmp_id = 0
    const user = ref(props.user)
    const logUserId = tmp_id
    const isFriend = ref(false)
    const toast = useToast()

    await $fetch(`/api/users/friends/${user.value.id}`)
    .then((data) => {
        if(data.friends.includes(logUserId)){
            isFriend.value = true
        }
    })

    const unfriend =async () => {
        await $fetch(`/api/users/friends/removeFriend`, {
            method: 'POST',
            body: {
                user1Id: logUserId,
                user2Id: user.value.id
            }
        }).then(() =>
            toast.info("You unfriended this user", {
                timeout: 2000
            })
        )
    
    }
    const sentInvite = async () => {    
        let goOn = true
        await $fetch(`/api/invites/invites`, {method: 'GET'}).then((data) => {
            data.invites.forEach((data) => {
                // console.log(data, "data")
                if(data.user_from_id === logUserId && data.user_to_id === user.value.id && goOn){
                    toast.info("You already sent an invite to this user", {
                        timeout: 2000
                    })
                    goOn = false
                    return 
                }
            })
        })
        if(goOn){
            await $fetch(`/api/invites/invite`, {
                method: 'POST',
                body: {
                    user_from_id: logUserId,
                    user_to_id: user.value.id
                }
            })
            toast.success("Success, Invite sended!", {
                timeout: 2000
            })
        }
        

    }

</script>