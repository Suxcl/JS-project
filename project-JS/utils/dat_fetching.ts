const url = "http://51.83.130.126:3000/"

export function getUsers(){
    return await $fetch(`${this.url}/users_vue`);
}