Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

console.log("ok vue",Vue);

const app = Vue.createApp({
    data() {
        return {
            firstName:"S.Gianmaria",
            lastName:"Fatta",
            age:"28",
            city:"Palermo",
            study:"Programmazione",
            academy:"Boolean",
            pic:"https://media.licdn.com/dms/image/C4D03AQHCV2YU7vo9rA/profile-displayphoto-shrink_800_800/0/1615671123764?e=1678924800&v=beta&t=sCB_8mHfIWn6_QC6mqRXRzHyzUYnlApk64zuga0ggSo",
        }
    }
});

app.mount("#root");