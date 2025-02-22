export function initTracking() {
  const trackingForm = document.getElementById("tracking-form");
  const trackingResult = document.getElementById("tracking-result");
  const statusTimeline = document.getElementById("status-timeline");
  const shipmentDetails = document.getElementById("shipment-details");

  trackingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const trackingNumber = document.getElementById("tracking-number").value;

    // Simulate API call with mock data
    const shipmentData = getMockShipmentData(trackingNumber);

    displayTrackingResult(shipmentData);
  });

  function displayTrackingResult(data) {
    statusTimeline.innerHTML = "";
    shipmentDetails.innerHTML = "";

    data.statusUpdates.forEach((update) => {
      const timelineItem = document.createElement("div");
      timelineItem.classList.add("timeline-item");
      timelineItem.innerHTML = `
                <div class="timeline-icon"></div>
                <div class="timeline-content">
                    <div class="timeline-date">${update.date}</div>
                    <div class="timeline-status">${update.status}</div>
                    <div>${update.location}</div>
                </div>
            `;
      statusTimeline.appendChild(timelineItem);
    });

    shipmentDetails.innerHTML = `
            <p><strong>Tracking Number:</strong> ${data.trackingNumber}</p>
            <p><strong>Service Type:</strong> ${data.serviceType}</p>
            <p><strong>Estimated Delivery:</strong> ${data.estimatedDelivery}</p>
            <p><strong>Sender:</strong> ${data.sender}</p>
            <p><strong>Recipient:</strong> ${data.recipient}</p>
        `;

    trackingResult.style.display = "block";
  }

  function getMockShipmentData(trackingNumber) {
    // This is a mock function to simulate getting data from an API
    return {
      trackingNumber: trackingNumber,
      serviceType: "Express Delivery",
      estimatedDelivery: "June 15, 2023",
      sender: "John Doe, New York",
      recipient: "Jane Smith, Los Angeles",
      statusUpdates: [
        {
          date: "June 12, 2023 09:00 AM",
          status: "Package picked up",
          location: "New York Sorting Facility",
        },
        {
          date: "June 13, 2023 02:30 PM",
          status: "In transit",
          location: "Chicago Distribution Center",
        },
        {
          date: "June 14, 2023 11:00 AM",
          status: "Out for delivery",
          location: "Los Angeles Local Courier",
        },
      ],
    };
  }
}

// Initialize tracking functionality when the DOM is fully loaded
