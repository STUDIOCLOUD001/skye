// Timeline data
const timelineData = [
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
    title: "Walk to Gate",
    details: "Direct walk to A124",
    timeSpent: "20 min.",
    startTime: "10:35 AM",
    endTime: "10:55 AM",
    image: "/placeholder.svg?height=120&width=300"
  },
  {
    id: 7,
    title: "Arrive at gate",
    details: "Be at the gate",
    timeSpent: "unknown",
    startTime: "10:55 AM",
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
];

// DOM Elements
const splashScreen = document.getElementById('splash-screen');
const flightNumberScreen = document.getElementById('flight-number-screen');
const landingPage = document.getElementById('landing-page');
const flightNumberInput = document.getElementById('flight-number-input');
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
renderTimeline(timelineData);
startCountdown();

// Splash screen timeout
setTimeout(() => {
splashScreen.classList.remove('active');
flightNumberScreen.classList.add('active');
}, 800);

// Event listeners
flightNumberInput.addEventListener('input', handleFlightNumberInput);
flightNumberIcon.addEventListener('click', handleFlightNumberSubmit);
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

// Handle flight number input
function handleFlightNumberInput() {
if (flightNumberInput.value.trim() !== '') {
flightNumberIcon.classList.add('active');
} else {
flightNumberIcon.classList.remove('active');
}
}

// Handle flight number submit
function handleFlightNumberSubmit() {
if (flightNumberInput.value.trim() !== '') {
flightNumberScreen.classList.remove('active');
landingPage.classList.add('active');
}
}

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
const timeline = document.getElementById('timeline'); // Ensure timeline element exists
timeline.innerHTML = '';

data.forEach(item => {
const timelineItem = document.createElement('div');
timelineItem.className = 'timeline-item';
timelineItem.setAttribute('data-id', item.id);

// Placeholder image for map preview (you can replace this URL with any placeholder map image)
const mapPreviewUrl = 'https://www.cph.dk/link/fac3c6f818af494e806db4d0c8db3441.aspx';

let timelineContent = `
  <div class="timeline-dot"></div>
  <div class="timeline-card">
    <h3 class="timeline-title">${item.title}</h3>
    ${item.details ? `<p class="timeline-details">${item.details}</p>` : ''}
    ${item.timeSpent ? `<p class="timeline-time">Time spent: ${item.timeSpent}</p>` : ''}
    ${item.startTime && item.endTime ? `<p class="timeline-time">${item.startTime} - ${item.endTime}</p>` : ''}
    <div style="display: flex; gap: 10px; align-items: center; justify-content: space-between;">
      <img src="${item.image}" alt="${item.title}" class="timeline-image" ${item.link ? `data-link="${item.link}"` : ''}>

      <!-- Static Map Preview (placeholder image) -->
      ${item.details ? `
        <div class="map-preview">
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

console.log("Landing Page Scroll Y:", landingPageScrollY);  // Log the scroll position
console.log("Header Height:", headerHeight); // Log header height

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
const newTimelineData = [...timelineData];

// Insert coffee break after security
newTimelineData.splice(1, 0, {
id: 'coffee',
title: "Coffee break",
details: "Espresso House",
timeSpent: "10 min.",
startTime: "8:50 AM",
endTime: "9:00 AM",
image: "/placeholder.svg?height=120&width=300"
});

// Update subsequent times
for (let i = 2; i < newTimelineData.length - 1; i++) {
const item = newTimelineData[i];
const prevItem = newTimelineData[i-1];

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

renderTimeline(newTimelineData);

// Add confirmation message
setTimeout(() => {
addChatMessage("Your updated timeline has been saved. Is there anything else you'd like to change?", 'ai');
}, 500);
}

// Call init function to initialize the app
initApp();
