const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideShowTicketHolders = () => {
    eventHub.addEventListener("sideShowTicketPurchased", () => {
        contentTarget.innerHTML += `
        <div class="person gawker"></div>`
    })
}