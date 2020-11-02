const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "rideTicket") {
        // console.log("button clicked" , clickEvent)
        const rideEvent = new CustomEvent("rideTicketPurchased")
        eventHub.dispatchEvent(rideEvent)

    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "foodTicket") {
        // console.log("button clicked" , clickEvent)
        const foodEvent = new CustomEvent("foodTicketPurchased")
        eventHub.dispatchEvent(foodEvent)

    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "gameTicket") {
        // console.log("button clicked" , clickEvent)
        const gameEvent = new CustomEvent("gameTicketPurchased")
        eventHub.dispatchEvent(gameEvent)

    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sideShowTicket") {
        // console.log("button clicked" , clickEvent)
        const sideShowEvent = new CustomEvent("sideShowTicketPurchased")
        eventHub.dispatchEvent(sideShowEvent)

    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
             <button id="rideTicket">Ride Ticket</button>
             <button id="foodTicket">Food Ticket</button>
             <button id="gameTicket">Game Ticket</button>
             <button id="sideShowTicket">Sideshow Ticket</button>

        </div>
    `
}


