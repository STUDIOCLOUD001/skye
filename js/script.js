// Timeline data for different journey types
const timelineData = {
  mix: [
    {
      id: 1,
      title: "Check-in and Security",
      details: "Security & Passport Control",
      timeSpent: "20 min.",
      startTime: "8:30 AM",
      endTime: "8:50 AM",
      image: "https://www.cph.dk/49ea7a/globalassets/3.-praktisk/7.-sikkerhedskontrol/fotos/sikkerhedskontrollen-security-kobenhavns-lufthavn.jpg?format=webp"
    },
    {
      id: 2,
      title: "Shopping Stop 1",
      details: "Illums Bolighus",
      timeSpent: "15 min.",
      startTime: "8:50 AM",
      endTime: "9:05 AM",
      image: "https://www.cph.dk/499741/globalassets/5.1%20butikker%20%20spisesteder%20new/blocks%20for%20individual%20merchants/butikker/illums%20bolighus/foto-illums-bolighus-airport-danish-design-2.jpg?format=webp",
      link: "https://www.instagram.com/illumsbolighus/?hl=da"
    },
    {
      id: 3,
      title: "Shopping Stop 2",
      details: "Georg Jensen",
      timeSpent: "10 min.",
      startTime: "9:05 AM",
      endTime: "9:15 AM",
      image: "https://www.cph.dk/496ca5/globalassets/5.1%20butikker%20%20spisesteder%20new/blocks%20for%20individual%20merchants/butikker/georg%20jensen/foto-georg-jensen-dansk-design.jpg?format=webp",
      link: "https://www.instagram.com/georgjensen/?hl=da"
    },
    {
      id: 4,
      title: "Lounge Visit",
      details: "CPH Lounge (Drinks & Snacks)",
      timeSpent: "40 min.",
      startTime: "9:15 AM",
      endTime: "9:55 AM",
      image: "https://www.cph.dk/492d6f/globalassets/3.-praktisk/lounges-og-workspaces/aspire-lounge/aspireloungebg.jpg?format=webp",
      link: "https://www.cph.dk/492d6f/globalassets/3.-praktisk/lounges-og-workspaces/aspire-lounge/aspireloungebg.jpg?format=webp"
    },
    {
      id: 5,
      title: "Meal",
      details: "MASH Steakhouse (Lunch)",
      timeSpent: "40 min.",
      startTime: "9:55 AM",
      endTime: "10:35 AM",
      image: "https://www.cph.dk/496a56/globalassets/5.1%20butikker%20%20spisesteder%20new/blocks%20for%20individual%20merchants/spisesteder/mash/foto-mash-bof-restaurant-lufthavnen2.jpg?format=webp",
      link: "https://www.instagram.com/copenhagenairport/?hl=da"
    },
    {
      id: 6,
      title: "Walk to Gate A124",
      details: "Direct walk to A124",
      timeSpent: "20 min.",
      startTime: "10:35 AM",
      endTime: "10:55 AM",
      image: "https://www.cph.dk/49058a/contentassets/759a522de5594da897c3fcb29cbf543e/map5850_cph_terminaler_511-800px.jpg?format=webp"
    },
    {
      id: 7,
      title: "Boarding at Gate A124",
      details: "",
      timeSpent: "unknown",
      startTime: "10:55 AM",
      endTime: "11:50 AM",
      image: "https://www.cph.dk/49ec00/globalassets/3.-praktisk/fotos/go-to-gate-og-boarding-information-kobenhavns-lufthavn-ny.jpg?format=webp"
    },
    {
      id: 8,
      title: "Skye and CPH Airport wishes you a delightful journey!",
      details: "",
      timeSpent: "",
      startTime: "",
      endTime: "",
      image: "https://plus.unsplash.com/premium_photo-1679830513886-e09cd6dc3137?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDgxfHx8ZW58MHx8fHx8",
      button: {
        text: "Leave feedback",
        action: "feedback"
      }
    }
  ],
  relax: [
    {
      id: 1,
      title: "Check-in and Security",
      details: "Security & Passport Control",
      timeSpent: "20 min.",
      startTime: "8:30 AM",
      endTime: "8:50 AM",
      image: "https://www.cph.dk/49ea7a/globalassets/3.-praktisk/7.-sikkerhedskontrol/fotos/sikkerhedskontrollen-security-kobenhavns-lufthavn.jpg?format=webp"
    },
    {
      id: 2,
      title: "Bookstore Visit",
      details: "Relax - Find a good read",
      timeSpent: "20 min.",
      startTime: "8:50 AM",
      endTime: "9:10 AM",
      image: "https://www.cph.dk/49d001/globalassets/5.1%20butikker%20%20spisesteder%20new/blocks%20for%20individual%20merchants/spisesteder/7-eleven/16-9-ny-foto-7-eleven-read-fly-gates-c-kiosk.jpg?format=webp"
    },
    {
      id: 3,
      title: "Coffee Break",
      details: "Starbucks - Enjoy a relaxing coffee",
      timeSpent: "25 min.",
      startTime: "9:10 AM",
      endTime: "9:35 AM",
      image: "https://www.cph.dk/49a55b/globalassets/5.1%20butikker%20%20spisesteder%20new/blocks%20for%20individual%20merchants/spisesteder/7-eleven/16-9-px-7-eleven-magasiner-kaffe-kiosk.jpg?format=webp",
      link: "https://www.instagram.com/starbucks/?hl=da"
    },
    {
      id: 4,
      title: "Quiet Reading",
      details: "Relax at the quiet seating area",
      timeSpent: "45 min.",
      startTime: "9:35 AM",
      endTime: "10:20 AM",
      image: "https://www.cph.dk/4a0bb2/globalassets/3.-praktisk/lounges-og-workspaces/aspire-lounge/cph-lounges---aspire-loungex.jpg?format=webp"
    },
    {
      id: 5,
      title: "Shower",
      details: "Take a warm shower",
      timeSpent: "30 min.",
      startTime: "10:20 AM",
      endTime: "10:50 AM",
      image: "https://www.cph.dk/491a1a/globalassets/3.-praktisk/lounges-og-workspaces/sas-lounge/sas-lounges-forste-sal-anden-sal-lufthavnen.jpg?format=webp"
    },
    {
      id: 6,
      title: "Walk to Gate A124",
      details: "Direct walk to A124",
      timeSpent: "20 min.",
      startTime: "10:35 AM",
      endTime: "10:55 AM",
      image: "https://www.cph.dk/49058a/contentassets/759a522de5594da897c3fcb29cbf543e/map5850_cph_terminaler_511-800px.jpg?format=webp"
    },
    {
      id: 7,
      title: "Boarding at Gate A124",
      details: "",
      timeSpent: "unknown",
      startTime: "10:55 AM",
      endTime: "11:50 AM",
      image: "https://www.cph.dk/49ec00/globalassets/3.-praktisk/fotos/go-to-gate-og-boarding-information-kobenhavns-lufthavn-ny.jpg?format=webp"
    },
    {
      id: 8,
      title: "Skye and CPH Airport wishes you a delightful journey!",
      details: "",
      timeSpent: "",
      startTime: "",
      endTime: "",
      image: "https://images.unsplash.com/photo-1572573385781-2fd4f8c1389e?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      button: {
        text: "Leave feedback",
        action: "feedback"
      }
    }
  ],
  explore: [
    {
      id: 1,
      title: "Check-in and Security",
      details: "Security & Passport Control",
      timeSpent: "20 min.",
      startTime: "8:30 AM",
      endTime: "8:50 AM",
      image: "https://www.cph.dk/49ea7a/globalassets/3.-praktisk/7.-sikkerhedskontrol/fotos/sikkerhedskontrollen-security-kobenhavns-lufthavn.jpg?format=webp"
    },
    {
      id: 2,
      title: "Airport Art Tour",
      details: "Discover art installations",
      timeSpent: "30 min.",
      startTime: "8:50 AM",
      endTime: "9:20 AM",
      image: "https://www.cph.dk/49a0a5/globalassets/2.-om-cph/presse/nyheder/2022/cph-art-hub/cph-art-hub-2.jpg?format=webp"
    },
    {
      id: 3,
      title: "Observation Deck",
      details: "Watch planes take off and land",
      timeSpent: "25 min.",
      startTime: "9:20 AM",
      endTime: "9:45 AM",
      image: "https://www.cph.dk/49a0a5/globalassets/3.-praktisk/for-born/foto-udsigtsplatform-fly-kobenhavns-lufthavn.jpg?format=webp"
    },
    {
      id: 4,
      title: "Danish Design Tour",
      details: "Explore Danish design stores",
      timeSpent: "40 min.",
      startTime: "9:45 AM",
      endTime: "10:25 AM",
      image: "https://www.cph.dk/49a0a5/globalassets/5.1%20butikker%20%20spisesteder%20new/blocks%20for%20individual%20merchants/butikker/sostrene-grene/foto-sostrene-grene-butik-lufthavnen.jpg?format=webp"
    },
    {
      id: 5,
      title: "Interactive Exhibits",
      details: "Visit temporary exhibitions",
      timeSpent: "25 min.",
      startTime: "10:25 AM",
      endTime: "10:50 AM",
      image: "https://www.cph.dk/49a0a5/globalassets/2.-om-cph/presse/nyheder/2022/cph-art-hub/cph-art-hub-1.jpg?format=webp"
    },
    {
      id: 6,
      title: "Walk to Gate",
      details: "Scenic route to A124",
      timeSpent: "25 min.",
      startTime: "10:50 AM",
      endTime: "11:15 AM",
      image: "/placeholder.svg?height=120&width=300"
    },
    {
      id: 7,
      title: "Arrive at gate",
      details: "Be at the gate",
      timeSpent: "unknown",
      startTime: "11:15 AM",
      endTime: "11:50 AM",
      image: "/placeholder.svg?height=120&width=300"
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
        action: "feedback"
      }
    }
  ],
  savor: [
    {
      id: 1,
      title: "Check-in and Security",
      details: "Security & Passport Control",
      timeSpent: "20 min.",
      startTime: "8:30 AM",
      endTime: "8:50 AM",
      image: "https://www.cph.dk/49ea7a/globalassets/3.-praktisk/7.-sikkerhedskontrol/fotos/sikkerhedskontrollen-security-kobenhavns-lufthavn.jpg?format=webp"
    },
    {
      id: 2,
      title: "Danish Pastries",
      details: "Lagkagehuset - Try authentic Danish pastries",
      timeSpent: "20 min.",
      startTime: "8:50 AM",
      endTime: "9:10 AM",
      image: "https://www.cph.dk/49a0a5/globalassets/5.1%20butikker%20%20spisesteder%20new/blocks%20for%20individual%20merchants/spisesteder/lagkagehuset/foto-lagkagehuset-bageri-lufthavnen.jpg?format=webp",
      link: "https://www.instagram.com/lagkagehuset/?hl=da"
    },
    {
      id: 3,
      title: "Coffee Tasting",
      details: "Joe & The Juice - Premium coffee experience",
      timeSpent: "20 min.",
      startTime: "9:10 AM",
      endTime: "9:30 AM",
      image: "https://www.cph.dk/49a0a5/globalassets/5.1%20butikker%20%20spisesteder%20new/blocks%20for%20individual%20merchants/spisesteder/joe-and-the-juice/foto-joe-and-the-juice-smoothie-lufthavnen.jpg?format=webp",
      link: "https://www.instagram.com/joeandthejuice/?hl=da"
    },
    {
      id: 4,
      title: "Wine Tasting",
      details: "Le Sommelier Bar - Sample premium wines",
      timeSpent: "35 min.",
      startTime: "9:30 AM",
      endTime: "10:05 AM",
      image: "https://www.cph.dk/49a0a5/globalassets/5.1%20butikker%20%20spisesteder%20new/blocks%20for%20individual%20merchants/spisesteder/le-sommelier-bar-and-bistro/foto-le-sommelier-bar-and-bistro-restaurant-lufthavnen.jpg?format=webp"
    },
    {
      id: 5,
      title: "Gourmet Meal",
      details: "MASH Steakhouse - Fine dining experience",
      timeSpent: "45 min.",
      startTime: "10:05 AM",
      endTime: "10:50 AM",
      image: "https://www.cph.dk/496a56/globalassets/5.1%20butikker%20%20spisesteder%20new/blocks%20for%20individual%20merchants/spisesteder/mash/foto-mash-bof-restaurant-lufthavnen2.jpg?format=webp",
      link: "https://www.instagram.com/mashsteak/?hl=da"
    },
    {
      id: 6,
      title: "Walk to Gate",
      details: "Direct walk to A124",
      timeSpent: "20 min.",
      startTime: "10:50 AM",
      endTime: "11:10 AM",
      image: "/placeholder.svg?height=120&width=300"
    },
    {
      id: 7,
      title: "Arrive at gate",
      details: "Be at the gate",
      timeSpent: "unknown",
      startTime: "11:10 AM",
      endTime: "11:50 AM",
      image: "/placeholder.svg?height=120&width=300"
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
        action: "feedback"
      }
    }
  ]
};

// Current active filter
let currentFilter = "mix";

// DOM Elements
const splashScreen = document.getElementById('splash-screen');
const flightNumberScreen = document.getElementById('flight-number-screen');
const landingPage = document.getElementById('landing-page');
const flightNumberInput = document.getElementById('flight-number-input');
const enterButton = document.getElementById('enter-button');
const flightNumberIcon = document.getElementById('flight-number-icon');
const countdownCard = document.getElementById('countdown-card');
const countdownTimer = document.getElementById('countdown-timer');
const viewFlightDetailsBtn = document.getElementById('view-flight-details');
const flightDetailsModal = document.getElementById('flight-details-modal');
const closeFlightDetailsBtn = document.getElementById('close-flight-details');
const activateSkyeBtn = document.getElementById('activate-skye');
const chatOverlay = document.getElementById('chat-overlay');
const closeChatBtn = document.getElementById('close-chat');
const chatInput = document.getElementById('chat-input');
const chatSendBtn = document.getElementById('chat-send');
const chatMessages = document.getElementById('chat-messages');
const timeline = document.getElementById('timeline');

// Initialize the app
function initApp() {
  // Initialize filter buttons
  initFilterButtons();

  // Render initial timeline with default filter
  renderTimeline(timelineData[currentFilter]);

  startCountdown();

  // Splash screen timeout
  setTimeout(() => {
    splashScreen.classList.remove('active');
    flightNumberScreen.classList.add('active');
  }, 800);

  // Event listeners
  flightNumberInput.addEventListener('input', handleFlightNumberInput);
  enterButton.addEventListener('click', handleFlightNumberSubmit);
  viewFlightDetailsBtn.addEventListener('click', openFlightDetails);
  closeFlightDetailsBtn.addEventListener('click', closeFlightDetails);
  activateSkyeBtn.addEventListener('click', openChatOverlay);
  closeChatBtn.addEventListener('click', closeChatOverlay);
  chatSendBtn.addEventListener('click', sendChatMessage);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendChatMessage();
  });
  // Sticky countdown card
  window.addEventListener('scroll', handleScroll);

  // Suggested inputs
  document.querySelectorAll('.suggested-input').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.textContent;
      chatInput.value = text;
      sendChatMessage();
    });
  });
}

// Initialize filter buttons
function initFilterButtons() {
  const filterButtons = document.querySelectorAll('.journey-filter-button');

  if (filterButtons.length === 0) {
    console.error("No filter buttons found");
    return;
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');
      // Update current filter
      currentFilter = button.getAttribute('data-filter');
      // Render timeline with new filter
      renderTimeline(timelineData[currentFilter]);
    });
  });
}

// Handle flight number input
function handleFlightNumberInput() {
  if (flightNumberInput.value.trim() !== '') {
    flightNumberIcon.classList.add('active');
    enterButton.classList.add('show');
  } else {
    flightNumberIcon.classList.remove('active');
    enterButton.classList.remove('show');
  }
}

// Handle flight number submit
function handleFlightNumberSubmit() {
  if (flightNumberInput.value.trim() !== '') {
    flightNumberScreen.classList.remove('active'); // Hide the flight number screen
    landingPage.classList.add('active'); // Show the landing page
  }
}

// Language selector toggle
document.querySelector('.language-selector').addEventListener('click', function() {
  this.classList.toggle('open');
});


// Function to open Google Maps in a modal
function openMapModal(location) {
  const modal = document.getElementById('map-modal');
  const modalContent = document.getElementById('map-modal-content');
  modalContent.innerHTML = `<iframe
    width="100%"
    height="100%"
    frameborder="0"
    style="border:0; position:absolute; top:0; left:0; width:100%; height:100%;"
    src="https://www.google.com/maps?q=${encodeURIComponent(location + ', Copenhagen Airport')}&output=embed&zoom=14&disableDefaultUI=true"
    allowfullscreen>
  </iframe>`;
  modal.classList.add('active');
}

// Render timeline
function renderTimeline(data) {
  const timeline = document.getElementById('timeline');
  if (!timeline) return;

  timeline.innerHTML = '';

  data.forEach(item => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    timelineItem.setAttribute('data-id', item.id);

    // Placeholder image for map preview
    const mapPreviewUrl = 'assets/images/cph_airport_map_arrow.png';

    let timelineContent = `
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div>
          <div class="timeline-card-time-info">
            ${item.startTime && item.endTime ? `<p class="timeline-time">${item.startTime} - ${item.endTime}</p>` : ''}
            ${item.timeSpent ? `<p class="timeline-time">${item.timeSpent}</p>` : ''}
          </div>
          <h3 class="timeline-title">${item.title}</h3>
            ${item.details ? `<p class="timeline-details">${item.details}</p>` : ''}
        </div>
        <div style="display: flex; gap: 0px; align-items: center; justify-content: space-between;">
          <img src="${item.image}" alt="${item.title}" class="timeline-image" ${item.link ? `data-link="${item.link}"` : ''}>

          <!-- Static Map Preview (placeholder image) -->
          ${item.details ? `
            <div class="map-preview">
              <button class="button button-secondary map-button">Directions</button>
              <img src="${mapPreviewUrl}" alt="Map Preview">
            </div>
          ` : ''}
        </div>
      </div>
    `;

    timelineItem.innerHTML = timelineContent;
    timeline.appendChild(timelineItem);
  });

  // Add event listeners to timeline images
  document.querySelectorAll('.timeline-image[data-link]').forEach(img => {
    img.addEventListener('click', () => {
      window.open(img.getAttribute('data-link'), '_blank');
    });
  });

  // Add event listeners to map previews to open modal
  document.querySelectorAll('.map-preview').forEach(preview => {
    preview.addEventListener('click', (event) => {
      const location = event.target.closest('.timeline-card').querySelector('.timeline-details').textContent;
      openMapModal(location);
    });
  });
}

// Start countdown timer
function startCountdown() {
  let hours = 3;
  let minutes = 2;
  let seconds = 0;

  const updateTimer = () => {
    countdownTimer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const countdown = setInterval(() => {
    if (seconds > 0) {
      seconds--;
    } else if (minutes > 0) {
      minutes--;
      seconds = 59;
    } else if (hours > 0) {
      hours--;
      minutes = 59;
      seconds = 59;
    } else {
      clearInterval(countdown);
    }

    updateTimer();
  }, 1000);

  updateTimer();
}

// Handle scroll for sticky countdown card
function handleScroll() {
  const landingPage = document.getElementById('landing-page');
  const headerHeight = document.querySelector('.landing-header')?.offsetHeight || 0; // Check if landing-header exists

  // Get scroll position of the #landing-page container
  const landingPageScrollY = landingPage.scrollTop;

  if (landingPageScrollY > headerHeight) {
    countdownCard.classList.add('sticky');
  } else {
    countdownCard.classList.remove('sticky');
  }
}

// Attach the scroll event listener to the #landing-page container
document.getElementById('landing-page').addEventListener('scroll', handleScroll);

// Flight details modal
function openFlightDetails() {
  flightDetailsModal.classList.add('active');
}

function closeFlightDetails() {
  flightDetailsModal.classList.remove('active');
}

// Chat overlay
function openChatOverlay() {
  chatOverlay.classList.add('active');
}

function closeChatOverlay() {
  chatOverlay.classList.remove('active');
}

// Send chat message
function sendChatMessage() {
  const message = chatInput.value.trim();
  if (message === '') return;

  // Add user message
  addChatMessage(message, 'user');
  chatInput.value = '';

  // Simulate AI response
  setTimeout(() => {
    if (message.toLowerCase().includes('coffee')) {
      addChatMessage("The nearest place to get a coffee is Espresso House. Should I update your Airport Experience?", 'ai', true);
    } else {
      addChatMessage("I'll help you with that! Is there anything specific you'd like to know?", 'ai');
    }
  }, 1000);
}

// Add chat message
function addChatMessage(text, sender, showActions = false) {
  const messageEl = document.createElement('div');
  messageEl.className = `message message-${sender}`;
  messageEl.textContent = text;

  if (showActions) {
    const actionsEl = document.createElement('div');
    actionsEl.className = 'chat-actions';

    const yesBtn = document.createElement('button');
    yesBtn.className = 'chat-action-button chat-action-yes';
    yesBtn.textContent = 'Yes';
    yesBtn.addEventListener('click', updateTimeline);

    const noBtn = document.createElement('button');
    noBtn.className = 'chat-action-button chat-action-no';
    noBtn.textContent = 'No';

    actionsEl.appendChild(yesBtn);
    actionsEl.appendChild(noBtn);
    messageEl.appendChild(actionsEl);
  }

  chatMessages.appendChild(messageEl);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Update timeline with coffee stop
function updateTimeline() {
  // Get the current timeline data based on the active filter
  const currentTimelineData = [...timelineData[currentFilter]];

  // Insert coffee break after security
  currentTimelineData.splice(1, 0, {
    id: 'coffee',
    title: "Coffee break",
    details: "Espresso House",
    timeSpent: "10 min.",
    startTime: "8:50 AM",
    endTime: "9:00 AM",
    image: "/placeholder.svg?height=120&width=300"
  });

  // Update subsequent times
  for (let i = 2; i < currentTimelineData.length - 1; i++) {
    const item = currentTimelineData[i];
    const prevItem = currentTimelineData[i-1];

    if (prevItem.endTime && item.startTime) {
      item.startTime = prevItem.endTime;

      // Calculate new end time
      if (item.timeSpent && item.startTime) {
        const startParts = item.startTime.split(':');
        const startHour = parseInt(startParts[0]);
        const startMinute = parseInt(startParts[1].split(' ')[0]);
        const isPM = item.startTime.includes('PM');

        const timeSpentMinutes = parseInt(item.timeSpent);

        let endMinute = startMinute + timeSpentMinutes;
        let endHour = startHour;
        let endIsPM = isPM;

        if (endMinute >= 60) {
          endHour += Math.floor(endMinute / 60);
          endMinute = endMinute % 60;

          if (endHour === 12 && !isPM) {
            endIsPM = true;
          } else if (endHour > 12) {
            endHour = endHour - 12;
            endIsPM = true;
          }
        }

        item.endTime = `${endHour}:${endMinute.toString().padStart(2, '0')} ${endIsPM ? 'PM' : 'AM'}`;
      }
    }
  }

  // Update the timeline data for the current filter
  timelineData[currentFilter] = currentTimelineData;

  // Render the updated timeline
  renderTimeline(currentTimelineData);

  // Add confirmation message
  setTimeout(() => {
    addChatMessage("Your updated timeline has been saved. Is there anything else you'd like to change?", 'ai');
  }, 500);
}

// Call init function to initialize the app
initApp();
