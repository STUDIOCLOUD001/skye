// Timeline data for different journeys
const timelineData = {
  mix: [
    {
      id: 1,
      title: "Check-in and Security",
      details: "Security & Passport Control",
      timeSpent: "20 min.",
      startTime: "8:30 AM",
      endTime: "8:50 AM",
      image:
        "https://www.cph.dk/49ea7a/globalassets/3.-praktisk/7.-sikkerhedskontrol/fotos/sikkerhedskontrollen-security-kobenhavns-lufthavn.jpg?format=webp",
    },
    {
      id: 2,
      title: "Illums Bolighus",
      details: "Scandinavian design at its finest, offering premium home decor, furniture, and lifestyle essentials.",
      timeSpent: "15 min.",
      startTime: "8:50 AM",
      endTime: "9:05 AM",
      image:
        "https://www.cph.dk/499741/globalassets/5.1%20butikker%20%20spisesteder%20new/blocks%20for%20individual%20merchants/butikker/illums%20bolighus/foto-illums-bolighus-airport-danish-design-2.jpg?format=webp",
      link: "https://www.instagram.com/illumsbolighus/?hl=da",
    },
    {
      id: 3,
      title: "Georg Jensen",
      details: "Timeless Scandinavian elegance in jewelry, silverware, and home decor.",
      timeSpent: "10 min.",
      startTime: "9:05 AM",
      endTime: "9:15 AM",
      image:
        "https://www.cph.dk/496ca5/globalassets/5.1%20butikker%20%20spisesteder%20new/blocks%20for%20individual%20merchants/butikker/georg%20jensen/foto-georg-jensen-dansk-design.jpg?format=webp",
      link: "https://www.instagram.com/georgjensen/?hl=da",
    },
    {
      id: 4,
      title: "Lounge Visit",
      details: "CPH Lounge (Drinks & Snacks)",
      timeSpent: "40 min.",
      startTime: "9:15 AM",
      endTime: "9:55 AM",
      image:
        "https://www.cph.dk/492d6f/globalassets/3.-praktisk/lounges-og-workspaces/aspire-lounge/aspireloungebg.jpg?format=webp",
      link: "https://www.cph.dk/492d6f/globalassets/3.-praktisk/lounges-og-workspaces/aspire-lounge/aspireloungebg.jpg?format=webp",
    },
    {
      id: 5,
      title: "MASH Steakhouse",
      details: "Premium steaks and cocktails with a view of the runway.",
      timeSpent: "40 min.",
      startTime: "9:55 AM",
      endTime: "10:35 AM",
      image:
        "https://www.cph.dk/496a56/globalassets/5.1%20butikker%20%20spisesteder%20new/blocks%20for%20individual%20merchants/spisesteder/mash/foto-mash-bof-restaurant-lufthavnen2.jpg?format=webp",
      link: "https://www.instagram.com/copenhagenairport/?hl=da",
    },
    {
      id: 6,
      title: "Walk to Gate A124",
      details: "Direct walk to A124",
      timeSpent: "20 min.",
      startTime: "10:35 AM",
      endTime: "10:55 AM",
      image:
        "https://www.cph.dk/49058a/contentassets/759a522de5594da897c3fcb29cbf543e/map5850_cph_terminaler_511-800px.jpg?format=webp",
    },
    {
      id: 7,
      title: "Boarding at Gate A124",
      details: "",
      timeSpent: "unknown",
      startTime: "10:55 AM",
      endTime: "11:50 AM",
      image:
        "https://videos.pexels.com/video-files/6472912/6472912-sd_640_360_24fps.mp4",
    },
    {
      id: 8,
      title: "Skye and CPH Airport wishes you a delightful journey!",
      details: "",
      timeSpent: "",
      startTime: "",
      endTime: "",
      image:
        "https://videos.pexels.com/video-files/3129769/3129769-sd_640_360_30fps.mp4",
      button: {
        text: "Leave feedback",
        action: "feedback",
      },
    },
  ],
  relax: [
    {
      id: 1,
      title: "Check-in and Security",
      details: "Security & Passport Control",
      timeSpent: "20 min.",
      startTime: "8:30 AM",
      endTime: "8:50 AM",
      image:
        "https://www.cph.dk/49ea7a/globalassets/3.-praktisk/7.-sikkerhedskontrol/fotos/sikkerhedskontrollen-security-kobenhavns-lufthavn.jpg?format=webp",
    },
    {
      id: 2,
      title: "Bookstore Visit",
      details: "Relax - Find a good read",
      timeSpent: "20 min.",
      startTime: "8:50 AM",
      endTime: "9:10 AM",
      image:
        "https://www.cph.dk/49d001/globalassets/5.1%20butikker%20%20spisesteder%20new/blocks%20for%20individual%20merchants/spisesteder/7-eleven/16-9-ny-foto-7-eleven-read-fly-gates-c-kiosk.jpg?format=webp",
    },
    {
      id: 3,
      title: "Coffee Break",
      details: "Starbucks - Enjoy a relaxing coffee",
      timeSpent: "25 min.",
      startTime: "9:10 AM",
      endTime: "9:35 AM",
      image:
        "https://www.cph.dk/49a55b/globalassets/5.1%20butikker%20%20spisesteder%20new/blocks%20for%20individual%20merchants/spisesteder/7-eleven/16-9-px-7-eleven-magasiner-kaffe-kiosk.jpg?format=webp",
      link: "https://www.instagram.com/starbucks/?hl=da",
    },
    {
      id: 4,
      title: "Quiet Reading",
      details: "Relax at the quiet seating area",
      timeSpent: "45 min.",
      startTime: "9:35 AM",
      endTime: "10:20 AM",
      image:
        "https://www.cph.dk/4a0bb2/globalassets/3.-praktisk/lounges-og-workspaces/aspire-lounge/cph-lounges---aspire-loungex.jpg?format=webp",
    },
    {
      id: 5,
      title: "Shower",
      details: "Take a warm shower",
      timeSpent: "30 min.",
      startTime: "10:20 AM",
      endTime: "10:50 AM",
      image:
        "https://www.cph.dk/491a1a/globalassets/3.-praktisk/lounges-og-workspaces/sas-lounge/sas-lounges-forste-sal-anden-sal-lufthavnen.jpg?format=webp",
    },
    {
      id: 6,
      title: "Walk to Gate A124",
      details: "Direct walk to A124",
      timeSpent: "20 min.",
      startTime: "10:35 AM",
      endTime: "10:55 AM",
      image:
        "https://www.cph.dk/49058a/contentassets/759a522de5594da897c3fcb29cbf543e/map5850_cph_terminaler_511-800px.jpg?format=webp",
    },
    {
      id: 7,
      title: "Boarding at Gate A124",
      details: "",
      timeSpent: "unknown",
      startTime: "10:55 AM",
      endTime: "11:50 AM",
      image:
        "https://www.cph.dk/49ec00/globalassets/3.-praktisk/fotos/go-to-gate-og-boarding-information-kobenhavns-lufthavn-ny.jpg?format=webp",
    },
    {
      id: 8,
      title: "Skye and CPH Airport wishes you a delightful journey!",
      details: "",
      timeSpent: "",
      startTime: "",
      endTime: "",
      image:
        "https://images.unsplash.com/photo-1572573385781-2fd4f8c1389e?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      button: {
        text: "Leave feedback",
        action: "feedback",
      },
    },
  ],
  explore: [
    {
      id: 1,
      title: "Check-in and Security",
      details: "Security & Passport Control",
      timeSpent: "20 min.",
      startTime: "8:30 AM",
      endTime: "8:50 AM",
      image:
        "https://www.cph.dk/49ea7a/globalassets/3.-praktisk/7.-sikkerhedskontrol/fotos/sikkerhedskontrollen-security-kobenhavns-lufthavn.jpg?format=webp",
    },
    {
      id: 2,
      title: "Airport Art Tour",
      details: "Discover art installations",
      timeSpent: "30 min.",
      startTime: "8:50 AM",
      endTime: "9:20 AM",
      image:
        "https://www.cph.dk/49a0a5/globalassets/2.-om-cph/presse/nyheder/2022/cph-art-hub/cph-art-hub-2.jpg?format=webp",
    },
    {
      id: 3,
      title: "Observation Deck",
      details: "Watch planes take off and land",
      timeSpent: "25 min.",
      startTime: "9:20 AM",
      endTime: "9:45 AM",
      image:
        "https://www.cph.dk/49a0a5/globalassets/3.-praktisk/for-born/foto-udsigtsplatform-fly-kobenhavns-lufthavn.jpg?format=webp",
    },
    {
      id: 4,
      title: "Danish Design Tour",
      details: "Explore Danish design stores",
      timeSpent: "40 min.",
      startTime: "9:45 AM",
      endTime: "10:25 AM",
      image:
        "https://www.cph.dk/49a0a5/globalassets/5.1%20butikker%20%20spisesteder%20new/blocks%20for%20individual%20merchants/butikker/sostrene-grene/foto-sostrene-grene-butik-lufthavnen.jpg?format=webp",
    },
    {
      id: 5,
      title: "Interactive Exhibits",
      details: "Visit temporary exhibitions",
      timeSpent: "25 min.",
      startTime: "10:25 AM",
      endTime: "10:50 AM",
      image:
        "https://www.cph.dk/49a0a5/globalassets/2.-om-cph/presse/nyheder/2022/cph-art-hub/cph-art-hub-1.jpg?format=webp",
    },
    {
      id: 6,
      title: "Walk to Gate",
      details: "Scenic route to A124",
      timeSpent: "25 min.",
      startTime: "10:50 AM",
      endTime: "11:15 AM",
      image: "/placeholder.svg?height=120&width=300",
    },
    {
      id: 7,
      title: "Arrive at gate",
      details: "Be at the gate",
      timeSpent: "unknown",
      startTime: "11:15 AM",
      endTime: "11:50 AM",
      image: "/placeholder.svg?height=120&width=300",
    },
    {
      id: 8,
      title: "Skye and CPH Airport wishes you a delightful journey",
      details: "",
      timeSpent: "",
      startTime: "",
      endTime: "",
      image: "/placeholder.svg?height=120&width=300",
      button: {
        text: "Leave feedback",
        action: "feedback",
      },
    },
  ],
  savor: [
    {
      id: 1,
      title: "Check-in and Security",
      details: "Security & Passport Control",
      timeSpent: "20 min.",
      startTime: "8:30 AM",
      endTime: "8:50 AM",
      image:
        "https://www.cph.dk/49ea7a/globalassets/3.-praktisk/7.-sikkerhedskontrol/fotos/sikkerhedskontrollen-security-kobenhavns-lufthavn.jpg?format=webp",
    },
    {
      id: 2,
      title: "Danish Pastries",
      details: "Lagkagehuset - Try authentic Danish pastries",
      timeSpent: "20 min.",
      startTime: "8:50 AM",
      endTime: "9:10 AM",
      image:
        "https://www.cph.dk/49a0a5/globalassets/5.1%20butikker%20%20spisesteder%20new/blocks%20for%20individual%20merchants/spisesteder/lagkagehuset/foto-lagkagehuset-bageri-lufthavnen.jpg?format=webp",
      link: "https://www.instagram.com/lagkagehuset/?hl=da",
    },
    {
      id: 3,
      title: "Coffee Tasting",
      details: "Joe & The Juice - Premium coffee experience",
      timeSpent: "20 min.",
      startTime: "9:10 AM",
      endTime: "9:30 AM",
      image:
        "https://www.cph.dk/49a0a5/globalassets/5.1%20butikker%20%20spisesteder%20new/blocks%20for%20individual%20merchants/spisesteder/joe-and-the-juice/foto-joe-and-the-juice-smoothie-lufthavnen.jpg?format=webp",
      link: "https://www.instagram.com/joeandthejuice/?hl=da",
    },
    {
      id: 4,
      title: "Wine Tasting",
      details: "Le Sommelier Bar - Sample premium wines",
      timeSpent: "35 min.",
      startTime: "9:30 AM",
      endTime: "10:05 AM",
      image:
        "https://www.cph.dk/49a0a5/globalassets/5.1%20butikker%20%20spisesteder%20new/blocks%20for%20individual%20merchants/spisesteder/le-sommelier-bar-and-bistro/foto-le-sommelier-bar-and-bistro-restaurant-lufthavnen.jpg?format=webp",
    },
    {
      id: 5,
      title: "Gourmet Meal",
      details: "MASH Steakhouse - Fine dining experience",
      timeSpent: "45 min.",
      startTime: "10:05 AM",
      endTime: "10:50 AM",
      image:
        "https://www.cph.dk/496a56/globalassets/5.1%20butikker%20%20spisesteder%20new/blocks%20for%20individual%20merchants/spisesteder/mash/foto-mash-bof-restaurant-lufthavnen2.jpg?format=webp",
      link: "https://www.instagram.com/mashsteak/?hl=da",
    },
    {
      id: 6,
      title: "Walk to Gate",
      details: "Direct walk to A124",
      timeSpent: "20 min.",
      startTime: "10:50 AM",
      endTime: "11:10 AM",
      image: "/placeholder.svg?height=120&width=300",
    },
    {
      id: 7,
      title: "Arrive at gate",
      details: "Be at the gate",
      timeSpent: "unknown",
      startTime: "11:10 AM",
      endTime: "11:50 AM",
      image: "/placeholder.svg?height=120&width=300",
    },
    {
      id: 8,
      title: "Skye and CPH Airport wishes you a delightful journey",
      details: "",
      timeSpent: "",
      startTime: "",
      endTime: "",
      image: "/placeholder.svg?height=120&width=300",
      button: {
        text: "Leave feedback",
        action: "feedback",
      },
    },
  ],
}

// Current active filter
let currentFilter = "mix"

// DOM Elements
const splashScreen = document.getElementById("splash-screen")
const logoContainer = document.getElementById("logo-container")
const flightNumberScreen = document.getElementById("flight-number-screen")
const landingPage = document.getElementById("landing-page")
const flightNumberInput = document.getElementById("flight-number-input")
const enterButton = document.getElementById("enter-button")
const flightNumberIcon = document.getElementById("flight-number-icon")
const countdownCard = document.getElementById("countdown-card")
const countdownTimer = document.getElementById("countdown-timer")
const viewFlightDetailsBtn = document.getElementById("view-flight-details")
const flightDetailsModal = document.getElementById("flight-details-modal")
const closeFlightDetailsBtn = document.getElementById("close-flight-details")
const activateSkyeBtn = document.getElementById("activate-skye")
const timeline = document.getElementById("timeline")

// Initialize the app
function initApp() {
  // Initialize filter buttons
  initFilterButtons()
  // Render initial timeline with default filter
  renderTimeline(timelineData[currentFilter])
  startCountdown()
  // Handle splash screen animation
  handleSplashScreenAnimation()

  // Event listeners
  flightNumberInput?.addEventListener("input", handleFlightNumberInput)
  enterButton?.addEventListener("click", handleFlightNumberSubmit)
  viewFlightDetailsBtn?.addEventListener("click", openFlightDetails)
  closeFlightDetailsBtn?.addEventListener("click", closeFlightDetails)
  activateSkyeBtn?.addEventListener("click", openChatOverlay)
  const closeChatBtn = document.getElementById("closeChatBtn")
  const chatSendBtn = document.getElementById("chatSendBtn")
  closeChatBtn?.addEventListener("click", closeChatOverlay)
  chatSendBtn?.addEventListener("click", sendChatMessage)
  chatInput?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendChatMessage()
  })
  // Sticky countdown card
  window.addEventListener("scroll", handleScroll)
  // Suggested inputs
  document.querySelectorAll(".suggested-input").forEach((btn) => {
    btn.addEventListener("click", () => {
      const text = btn.textContent
      chatInput.value = text
      sendChatMessage()
    })
  })
}

// Handle splash screen animation
function handleSplashScreenAnimation() {
  if (!splashScreen || !logoContainer) return
  // Get the video element
  const videoElement = logoContainer.querySelector("video")
  if (videoElement) {
    // When video ends or after 2 seconds, start the animation sequence
    const animationTimeout = setTimeout(() => {
      // First shrink
      logoContainer.classList.add("shrink")
      // Then expand and fade out
      setTimeout(() => {
        logoContainer.classList.remove("shrink")
        logoContainer.classList.add("expand")
        // Finally hide the splash screen
        setTimeout(() => {
          splashScreen.classList.remove("active")
          // Show the flight number screen
          if (flightNumberScreen) {
            flightNumberScreen.classList.add("active")
          }
        }, 300)
      }, 150)
    }, 1800) // Start animation slightly before video ends (assuming 2 second video)

    // If video has loadedmetadata event, use the actual duration
    videoElement.addEventListener("loadedmetadata", () => {
      // Clear the previous timeout
      clearTimeout(animationTimeout)

      // Set a new timeout based on actual video duration
      setTimeout(
        () => {
          // First shrink
          logoContainer.classList.add("shrink")

          // Then expand and fade out
          setTimeout(() => {
            logoContainer.classList.remove("shrink")
            logoContainer.classList.add("expand")

            // Finally hide the splash screen
            setTimeout(() => {
              splashScreen.classList.remove("active")

              // Show the flight number screen
              if (flightNumberScreen) {
                flightNumberScreen.classList.add("active")
              }
            }, 300)
          }, 150)
        },
        videoElement.duration * 1000 - 200,
      ) // Start animation slightly before video ends
    })
  } else {
    // Fallback if no video element is found
    setTimeout(() => {
      splashScreen.classList.remove("active")
      if (flightNumberScreen) {
        flightNumberScreen.classList.add("active")
      }
    }, 2000)
  }
}

// Initialize filter buttons
function initFilterButtons() {
  const filterButtons = document.querySelectorAll(".journey-filter-button")

  if (filterButtons.length === 0) {
    console.error("No filter buttons found")
    return
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      // Add active class to clicked button
      button.classList.add("active")
      // Update current filter
      currentFilter = button.getAttribute("data-filter")
      // Render timeline with new filter
      renderTimeline(timelineData[currentFilter])
    })
  })
}

// Handle flight number input
function handleFlightNumberInput() {
  if (flightNumberInput.value.trim() !== "") {
    flightNumberIcon.classList.add("active")
    enterButton.classList.add("show")
  } else {
    flightNumberIcon.classList.remove("active")
    enterButton.classList.remove("show")
  }
}

// Handle flight number submit
function handleFlightNumberSubmit() {
  if (flightNumberInput.value.trim() !== "") {
    flightNumberScreen.classList.remove("active") // Hide the flight number screen
    landingPage.classList.add("active") // Show the landing page
  }
}

// Language selector toggle
document.querySelector(".language-selector")?.addEventListener("click", function () {
  this.classList.toggle("open")
})

// Function to open Google Maps in a modal
function openMapModal(location) {
  const modal = document.getElementById("map-modal")
  const modalContent = document.getElementById("map-modal-content")
  modalContent.innerHTML = `<iframe
    width="100%"
    height="100%"
    frameborder="0"
    style="border:0; position:absolute; top:0; left:0; width:100%; height:100%;"
    src="https://www.google.com/maps?q=${encodeURIComponent(location + ", Copenhagen Airport")}&output=embed&zoom=14&disableDefaultUI=true"
    allowfullscreen>
  </iframe>`
  modal.classList.add("active")
}

// Render timeline
function renderTimeline(data) {
  const timeline = document.getElementById("timeline")
  if (!timeline) return

  timeline.innerHTML = ""

  data.forEach((item, index) => {
    const timelineItem = document.createElement("div")
    timelineItem.className = "timeline-item"
    timelineItem.setAttribute("data-id", item.id)

    // Placeholder image for map preview
    const mapPreviewUrl = "assets/images/cph_airport_map_arrow.png"

    // Check if this is one of the last two items
    const isLastTwo = index >= data.length - 2

    let timelineContent = ""

    if (isLastTwo) {
      // Special layout for the last two cards
      const isLastItem = index === data.length - 1

      timelineContent = `
        <div class="timeline-dot ${isLastItem ? "final-dot" : "boarding-dot"}"></div>
        <div class="timeline-card special-card ${isLastItem ? "final-card" : "boarding-card"}">
          <div class="special-card-content">
            <div class="special-card-text">
              <div class="timeline-card-time-info">
                ${item.startTime && item.endTime ? `<p class="timeline-time">${item.startTime} - ${item.endTime}</p>` : ""}
                ${item.timeSpent ? `<p class="timeline-time">${item.timeSpent}</p>` : ""}
              </div>

              <h3 class="timeline-title">${item.title}</h3>
              ${item.details ? `<p class="timeline-details">${item.details}</p>` : ""}


            </div>

            <div class="special-card-image">
              <img src="${item.image}" alt="${item.title}" class="timeline-image full-width" ${item.link ? `data-link="${item.link}"` : ""}>
            </div>

            ${
              isLastItem && item.button
                ? `
              <div class="feedback-button-container">
                <button class="button button-primary feedback-button">${item.button.text}</button>
              </div>
            `
                : ""
            }
          </div>
        </div>
      `
    } else {
      // Regular layout for other cards
      timelineContent = `
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div>
            <div class="timeline-card-time-info">
              ${item.startTime && item.endTime ? `<p class="timeline-time">${item.startTime} - ${item.endTime}</p>` : ""}
              ${item.timeSpent ? `<p class="timeline-time">${item.timeSpent}</p>` : ""}
            </div>
            <h3 class="timeline-title">${item.title}</h3>
              ${item.details ? `<p class="timeline-details">${item.details}</p>` : ""}
          </div>
          <div style="display: flex; gap: 0px; align-items: center; justify-content: space-between;">
            <img src="${item.image}" alt="${item.title}" class="timeline-image" ${item.link ? `data-link="${item.link}"` : ""}>

            <!-- Static Map Preview (placeholder image) -->
            ${
              item.details
                ? `
              <div class="map-preview">
                <button class="button button-secondary map-button">Directions</button>
                <img src="${mapPreviewUrl}" alt="Map Preview">
              </div>
            `
                : ""
            }
          </div>
        </div>
      `
    }

    timelineItem.innerHTML = timelineContent
    timeline.appendChild(timelineItem)
  })
  // Add event listeners to timeline images
  document.querySelectorAll(".timeline-image[data-link]").forEach((img) => {
    img.addEventListener("click", () => {
      window.open(img.getAttribute("data-link"), "_blank")
    })
  })
  // Add event listeners to map previews to open modal
  document.querySelectorAll(".map-preview").forEach((preview) => {
    preview.addEventListener("click", (event) => {
      const location = event.target.closest(".timeline-card").querySelector(".timeline-details").textContent
      openMapModal(location)
    })
  })
  // Add event listener to feedback button
  document.querySelectorAll(".feedback-button").forEach((button) => {
    button.addEventListener("click", () => {
      // You can implement feedback functionality here
      alert("Thank you for your feedback!")
    })
  })
}

// Start countdown timer
function startCountdown() {
  if (!countdownTimer) return

  let hours = 3
  let minutes = 2
  let seconds = 0

  const updateTimer = () => {
    countdownTimer.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  const countdown = setInterval(() => {
    if (seconds > 0) {
      seconds--
    } else if (minutes > 0) {
      minutes--
      seconds = 59
    } else if (hours > 0) {
      hours--
      minutes = 59
      seconds = 59
    } else {
      clearInterval(countdown)
    }

    updateTimer()
  }, 1000)

  updateTimer()
}

// Handle scroll for sticky countdown card
function handleScroll() {
  const landingPage = document.getElementById("landing-page")
  if (!landingPage || !countdownCard) return

  const headerHeight = document.querySelector(".landing-header")?.offsetHeight || 0

  // Get scroll position of the #landing-page container
  const landingPageScrollY = landingPage.scrollTop

  if (landingPageScrollY > headerHeight) {
    countdownCard.classList.add("sticky")
  } else {
    countdownCard.classList.remove("sticky")
  }
}

// Attach the scroll event listener to the #landing-page container
document.getElementById("landing-page")?.addEventListener("scroll", handleScroll)
// Flight details modal
function openFlightDetails() {
  flightDetailsModal.classList.add("active")
}
function closeFlightDetails() {
  flightDetailsModal.classList.remove("active")
}





// Skye - the AI Agent
// DOM Elements
const chatOverlay = document.getElementById("chatOverlay")
const chatMessages = document.getElementById("chatMessages")
const chatInput = document.getElementById("chatInput")
const emojiContainer = document.getElementById("emoji-face-container")
const headerLogoContainer = document.getElementById("header-logo-container")
const leftEyeImg = document.getElementById("leftEye")
const rightEyeImg = document.getElementById("rightEye")
const mouthImg = document.getElementById("mouth")
const chatbackgroundOverlay = document.getElementById("chatbackgroundOverlay")
const immersiveContainer = document.getElementById("immersiveContainer")
const immersiveLeftEye = document.getElementById("immersiveLeftEye")
const immersiveRightEye = document.getElementById("immersiveRightEye")
const immersiveMouth = document.getElementById("immersiveMouth")
const particles = document.getElementById("particles")

// Animation variables
let isTyping = false
let animationFrameId = null
let lastUpdate = 0
const minDelay = 500 // Min time between emotial expression changes (ms)

// Emotional expression assets
const expressions = [
  {
    leftEye: "assets/icons/expressions/Left_Eye_Neutral.svg",
    rightEye: "assets/icons/expressions/Right_Eye_Neutral.svg",
    mouth: "assets/icons/expressions/Mouth_Signature_Smile.svg",
    isHappy: false,
  },
  {
    leftEye: "assets/icons/expressions/Left_Eye_Happy.svg",
    rightEye: "assets/icons/expressions/Right_Eye_Happy.svg",
    mouth: "assets/icons/expressions/Mouth_Smile.svg",
    isHappy: true,
  },
  {
    leftEye: "assets/icons/expressions/Left_Eye_Wink.svg",
    rightEye: "assets/icons/expressions/Right_Eye_Neutral.svg",
    mouth: "assets/icons/expressions/Mouth_Big_Smile.svg",
    isHappy: true,
  },
  {
    leftEye: "assets/icons/expressions/Left_Eye_Peaceful.svg",
    rightEye: "assets/icons/expressions/Right_Eye_Peaceful.svg",
    mouth: "assets/icons/expressions/Mouth_Surprise.svg",
    isHappy: false,
  },
  {
    leftEye: "assets/icons/expressions/Left_Eye_Closed.svg",
    rightEye: "assets/icons/expressions/Right_Eye_Closed.svg",
    mouth: "assets/icons/expressions/Mouth_Big_Surprise.svg",
    isHappy: false,
  },
]

let idleAnimationTimeout

function openChatOverlay() {
  chatOverlay.classList.add("active")
  chatbackgroundOverlay.style.opacity = "1"
  chatbackgroundOverlay.style.pointerEvents = "auto"
}

function closeChatOverlay() {
  chatOverlay.classList.remove("active")
  chatbackgroundOverlay.style.opacity = "0"
  chatbackgroundOverlay.style.pointerEvents = "none"
}

// Close chat when clicking the background
chatbackgroundOverlay?.addEventListener("click", closeChatOverlay)

// Background particles to mimic speed, flying, hyper-space, the sky
function createParticles() {
  particles.innerHTML = "";
  const particleCount = 150;
  const colors = ["rgba(255, 255, 255, 0.02)", "rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.3)"];

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    // Assign a random color
    const color = colors[Math.floor(Math.random() * colors.length)];
    // Random starting position (bottom of the screen)
    const x = Math.random() * 100;
    const y = 0 + Math.random() * 100; // Start slightly off-screen for smooth appearance
    // Random size (vertical streaks)
    const width = Math.random() * 2 + 1;
    const height = Math.random() * 30 + 10;
    // Random animation delay
    const delay = Math.random() * 2;
    // Random Y movement (upward speed variation)
    const yOffset = Math.random() * 100 + 50; // Move upwards between 50-100px

    particle.style.left = `${x}%`;
    particle.style.top = `${y}%`;
    particle.style.width = `${width}px`;
    particle.style.height = `${height}px`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.setProperty("--y-offset", `${yOffset}px`);
    particle.style.background = color;
    particle.style.filter = `blur(${Math.random() * 1}px)`;

    particles.appendChild(particle);
  }
}


function animateEmoji(timestamp = 0) {
  if (!isTyping) return

  if (!lastUpdate) lastUpdate = timestamp

  if (timestamp - lastUpdate > minDelay) {
    const randomIndex = Math.floor(Math.random() * expressions.length)
    const expression = expressions[randomIndex]

    changeExpression(expression)
    changeImmersiveExpression(expression)

    const emojiFace = document.querySelector(".emoji-face")
    if (expression.isHappy) {
      emojiFace.classList.add("happy")
    } else {
      emojiFace.classList.remove("happy")
    }

    lastUpdate = timestamp
  }

  animationFrameId = requestAnimationFrame(animateEmoji)
}

function changeImmersiveExpression(expression) {
  immersiveLeftEye.src = expression.leftEye
  immersiveRightEye.src = expression.rightEye
  immersiveMouth.src = expression.mouth

  const immersiveFace = immersiveContainer.querySelector(".emoji-face")
  if (expression.isHappy) {
    immersiveFace.classList.add("happy")
  } else {
    immersiveFace.classList.remove("happy")
  }
}

function startIdleAnimation() {
  const chatLogoContainer = document.getElementById("chat-logo-container")
  const headerLogoContainer = document.getElementById("header-logo-container")

  function showRandomExpression() {
    const randomIndex = Math.floor(Math.random() * expressions.length)
    const expression = expressions[randomIndex]

    const tempEmojiContainer = document.createElement("div")
    tempEmojiContainer.className = "temp-emoji-container"
    tempEmojiContainer.innerHTML = `
      <div class="emoji-face ${expression.isHappy ? "happy" : ""}">
        <div class="eyes">
          <div class="eye left-eye">
            <div class="svg-wrapper">
              <img src="${expression.leftEye}" alt="Left Eye">
            </div>
          </div>
          <div class="eye right-eye">
            <div class="svg-wrapper">
              <img src="${expression.rightEye}" alt="Right Eye">
            </div>
          </div>
        </div>
        <div class="mouth">
          <div class="svg-wrapper">
            <img src="${expression.mouth}" alt="Mouth">
          </div>
        </div>
      </div>
    `

    chatLogoContainer?.appendChild(tempEmojiContainer)
    headerLogoContainer?.appendChild(tempEmojiContainer.cloneNode(true))

    setTimeout(() => {
      if (chatLogoContainer?.lastChild) chatLogoContainer.removeChild(chatLogoContainer.lastChild)
      if (headerLogoContainer?.lastChild) headerLogoContainer.removeChild(headerLogoContainer.lastChild)
    }, 0)
  }

  function scheduleNextAnimation() {
    const randomDelay = Math.floor(Math.random() * 10000) + 5000
    idleAnimationTimeout = setTimeout(() => {
      showRandomExpression()
      scheduleNextAnimation()
    }, randomDelay)
  }

  scheduleNextAnimation()
}

function changeExpression(expression) {
  const tempLeftEye = leftEyeImg.cloneNode()
  const tempRightEye = rightEyeImg.cloneNode()
  const tempMouth = mouthImg.cloneNode()

  tempLeftEye.src = expression.leftEye
  tempRightEye.src = expression.rightEye
  tempMouth.src = expression.mouth
  ;[tempLeftEye, tempRightEye, tempMouth].forEach((tempImg) => {
    tempImg.style.position = "absolute"
    tempImg.style.opacity = "0"
    tempImg.style.transition = "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s ease-in-out"
    tempImg.style.transform = "scale(1.1)" // Slightly enlarged to create a softer transition
  })

  leftEyeImg?.parentNode?.appendChild(tempLeftEye)
  rightEyeImg?.parentNode?.appendChild(tempRightEye)
  mouthImg?.parentNode?.appendChild(tempMouth)

  requestAnimationFrame(() => {
    tempLeftEye.style.opacity = "1"
    tempRightEye.style.opacity = "1"
    tempMouth.style.opacity = "1"
    tempLeftEye.style.transform = "scale(1)"
    tempRightEye.style.transform = "scale(1)"
    tempMouth.style.transform = "scale(1)"
  })

  const randomTilt = (Math.random() - 0.5) * 4
  if (emojiContainer) {
    emojiContainer.style.transition = "transform 0.4s ease-in-out"
    emojiContainer.style.transform = `rotate(${randomTilt}deg) translateY(${Math.random() * 2}px)`
  }

  setTimeout(() => {
    if (leftEyeImg) leftEyeImg.src = expression.leftEye
    if (rightEyeImg) rightEyeImg.src = expression.rightEye
    if (mouthImg) mouthImg.src = expression.mouth

    tempLeftEye.remove()
    tempRightEye.remove()
    tempMouth.remove()
  }, 100)
}

function stopIdleAnimation() {
  clearTimeout(idleAnimationTimeout)
}

function startTypingAnimation() {
  isTyping = true
  if (emojiContainer) emojiContainer.classList.add("hidden")
  if (headerLogoContainer) headerLogoContainer.classList.add("hidden")
  if (emojiContainer) emojiContainer.classList.add("hidden")

  const closeButton = document.querySelector(".close-button")
  if (closeButton) {
    closeButton.style.display = "none"
  }

  const chatInputContainer = document.querySelector(".chat-input-container")
  if (chatInputContainer) chatInputContainer.style.display = "none"

  stopIdleAnimation()

  const emojiFace = document.querySelector(".emoji-face")
  if (emojiFace) emojiFace.classList.add("typing")

  if (emojiContainer) {
    emojiContainer.style.width = "80px"
    emojiContainer.style.height = "80px"
  }

  // Show immersive face
  if (immersiveContainer) immersiveContainer.classList.add("active")
  if (chatMessages) chatMessages.classList.add("typing-mode")

  // Create floating particles
  createParticles()

  const typingIndicator = document.createElement("div")
  typingIndicator.className = "message message-ai typing-indicator"
  typingIndicator.id = "typing-indicator"

  const typingDots = document.createElement("div")
  typingDots.className = "typing-dots"

  for (let i = 0; i < 3; i++) {
    const dot = document.createElement("span")
    typingDots.appendChild(dot)
  }

  typingIndicator.appendChild(typingDots)
  if (chatMessages) {
    chatMessages.appendChild(typingIndicator)
    chatMessages.scrollTop = chatMessages.scrollHeight
  }

  // Start animation loop
  animateEmoji()
}

function stopTypingAnimation() {
  isTyping = false
  if (emojiContainer) emojiContainer.classList.add("hidden")
  if (headerLogoContainer) headerLogoContainer.classList.remove("hidden")

  const closeButton = document.querySelector(".close-button")
  if (closeButton) {
    closeButton.style.display = "block"
  }

  const chatInputContainer = document.querySelector(".chat-input-container")
  if (chatInputContainer) chatInputContainer.style.display = "flex"

  // Remove 'typing' class from emoji face
  const emojiFace = document.querySelector(".emoji-face")
  if (emojiFace) {
    emojiFace.classList.remove("typing")
    emojiFace.classList.remove("happy")
  }

  // Hide immersive face
  if (immersiveContainer) immersiveContainer.classList.remove("active")
  if (chatMessages) chatMessages.classList.remove("typing-mode")

  // Reset container size
  if (emojiContainer) {
    emojiContainer.style.width = "40px"
    emojiContainer.style.height = "40px"
  }

  // Remove typing indicator
  const typingIndicator = document.getElementById("typing-indicator")
  if (typingIndicator) {
    typingIndicator.remove()
  }

  // Stop animation loop
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
    animationFrameId = null
  }

  startIdleAnimation()
}

// Initialize idle animation when the page loads
window.addEventListener("load", startIdleAnimation)

// Chat message functions
function addChatMessage(text, sender, showActions = false) {
  if (!chatMessages) return

  const messageEl = document.createElement("div")
  messageEl.className = `message message-${sender}`
  messageEl.textContent = text

  if (showActions) {
    const actionsEl = document.createElement("div")
    actionsEl.className = "chat-actions"

    const yesBtn = document.createElement("button")
    yesBtn.className = "button button-primary chat-action-yes"
    yesBtn.textContent = "Yes"
    yesBtn.addEventListener("click", updateTimeline)

    const noBtn = document.createElement("button")
    noBtn.className = "button button-secondary chat-action-no"
    noBtn.textContent = "No"

    actionsEl.appendChild(yesBtn)
    actionsEl.appendChild(noBtn)
    messageEl.appendChild(actionsEl)
  }

  chatMessages.appendChild(messageEl)
  chatMessages.scrollTop = chatMessages.scrollHeight
}

// Add a new function to randomly trigger micro-animations
function triggerMicroAnimation() {
  const emojiFace = document.querySelector(".emoji-face")
  if (!emojiFace) return

  const randomAnimation = Math.random()

  if (randomAnimation < 0.3) {
    emojiFace.style.transform = "rotate(5deg)"
    setTimeout(() => {
      emojiFace.style.transform = "rotate(0deg)"
    }, 300)
  } else if (randomAnimation < 0.6) {
    emojiFace.style.transform = "scale(1.1)"
    setTimeout(() => {
      emojiFace.style.transform = "scale(1)"
    }, 300)
  }
}

// Function to handle suggested input clicks
function handleSuggestedInputClick(event) {
  if (!chatInput) return

  const suggestedText = event.target.textContent
  chatInput.value = suggestedText
  sendChatMessage()
}

// Send chat message
function sendChatMessage() {
  if (!chatInput) return

  const message = chatInput.value.trim()
  if (message === "") return

  // Add user message
  addChatMessage(message, "user")
  chatInput.value = ""

  // Remove suggested inputs after the first user message
  const suggestedInputs = document.querySelector(".suggested-inputs")
  if (suggestedInputs) {
    suggestedInputs.remove()
  }

  // Start typing animation
  startTypingAnimation()

  // Trigger micro-animations periodically
  const microAnimationInterval = setInterval(triggerMicroAnimation, 2000)

  // Simulate AI response
  setTimeout(() => {
    // Stop typing animation
    stopTypingAnimation()

    // Clear micro-animation interval
    clearInterval(microAnimationInterval)

    if (message.toLowerCase().includes("coffee")) {
      addChatMessage(
        "The nearest place to get a coffee is Espresso House. Should I update your Airport Experience?",
        "ai",
        true,
      )
    } else {
      addChatMessage("I'll help you with that! Is there anything specific you'd like to know?", "ai")
    }
  }, 4400) // Increased delay to show more of the animation
}

// Update timeline with coffee stop
function updateTimeline() {
  // Start typing animation
  startTypingAnimation()

  // Create a new coffee stop item
  const coffeeStop = {
    id: "coffee-" + Date.now(), // Unique ID
    title: "Coffee Break",
    details: "Espresso House - Premium coffee experience",
    timeSpent: "20 min.",
    image:
      "https://www.cph.dk/49a0a5/globalassets/5.1%20butikker%20%20spisesteder%20new/blocks%20for%20individual%20merchants/spisesteder/joe-and-the-juice/foto-joe-and-the-juice-smoothie-lufthavnen.jpg?format=webp",
    link: "https://www.instagram.com/espressohouse/?hl=da",
  }

  // Get the current timeline data
  const currentTimelineData = timelineData[currentFilter]

  // Find a good position to insert the coffee stop (after security, before boarding)
  // We'll insert it after the 2nd item (index 1) for most journeys
  const insertPosition = 2

  // Calculate new times for the coffee stop and subsequent items
  recalculateTimesWithNewStop(currentTimelineData, insertPosition, coffeeStop)

  // Insert the coffee stop at the determined position
  currentTimelineData.splice(insertPosition, 0, coffeeStop)

  // Simulate a delay for the update
  setTimeout(() => {
    // Re-render the timeline with the updated data
    renderTimeline(currentTimelineData)

    // Stop typing animation
    stopTypingAnimation()

    // Add confirmation message
    addChatMessage(
      "Your timeline has been updated with a coffee break at Espresso House. Is there anything else you'd like to change?",
      "ai",
    )
  }, 1500)
}

// Helper function to recalculate times when adding a new stop
function recalculateTimesWithNewStop(timeline, insertPosition, newStop) {
  // If the timeline is empty or position is invalid, return
  if (!timeline.length || insertPosition < 0 || insertPosition >= timeline.length) {
    return
  }

  // Get the previous item's end time as the start time for our new stop
  const previousItem = timeline[insertPosition - 1]
  if (previousItem && previousItem.endTime) {
    newStop.startTime = previousItem.endTime

    // Calculate end time based on time spent
    if (newStop.timeSpent && newStop.timeSpent.includes("min")) {
      const minutes = Number.parseInt(newStop.timeSpent)
      if (!isNaN(minutes)) {
        newStop.endTime = addMinutesToTime(newStop.startTime, minutes)
      }
    }
  }

  // Update times for all subsequent items
  if (newStop.endTime) {
    let currentStartTime = newStop.endTime

    for (let i = insertPosition; i < timeline.length; i++) {
      const item = timeline[i]

      // Skip items without times
      if (!item.startTime || !item.endTime) continue

      // Update start time
      item.startTime = currentStartTime

      // Calculate new end time based on time spent
      if (item.timeSpent && item.timeSpent.includes("min")) {
        const minutes = Number.parseInt(item.timeSpent)
        if (!isNaN(minutes)) {
          item.endTime = addMinutesToTime(item.startTime, minutes)
          currentStartTime = item.endTime
        }
      }
    }
  }
}

// Helper function to add minutes to a time string (format: "10:30 AM")
function addMinutesToTime(timeStr, minutesToAdd) {
  // Parse the time string
  const [time, period] = timeStr.split(" ")
  const [hours, minutes] = time.split(":").map(Number)

  // Convert to 24-hour format
  let totalHours = hours
  if (period === "PM" && hours < 12) totalHours += 12
  if (period === "AM" && hours === 12) totalHours = 0

  // Calculate new time
  const totalMinutes = totalHours * 60 + minutes + minutesToAdd

  // Convert back to hours and minutes
  let newHours = Math.floor(totalMinutes / 60) % 24
  const newMinutes = totalMinutes % 60

  // Format the time
  let newPeriod = "AM"
  if (newHours >= 12) {
    newPeriod = "PM"
    if (newHours > 12) newHours -= 12
  }
  if (newHours === 0) newHours = 12

  return `${newHours}:${newMinutes.toString().padStart(2, "0")} ${newPeriod}`
}

// Call init function to initialize the app
document.addEventListener("DOMContentLoaded", initApp)
