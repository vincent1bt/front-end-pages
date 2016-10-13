
var notificationsButton = document.querySelector(".section_notifications_news_title_text")
var notificationsSpan = document.querySelector(".news_close")
var notificationsDiv = document.querySelector(".section_notifications_news_section")

var requestsButton = document.querySelector(".section_notifications_requests_title")
var requestsSpan = document.querySelector(".requests_close")
var requestsDiv = document.querySelector(".section_notifications_requests_section")

var messagesButton = document.querySelector(".section_messages_title_text")
var messagesSpan = document.querySelector(".messages_close")
var messagesDiv = document.querySelector(".section_messages_users")


notificationsButton.addEventListener("click", function() {
  notificationsSpan.classList.toggle("open")
  this.classList.toggle("shine")
  notificationsDiv.classList.toggle("hide")
});


requestsButton.addEventListener("click", function() {
  requestsSpan.classList.toggle("open")
  this.classList.toggle("shine")
  requestsDiv.classList.toggle("hide")
});

messagesButton.addEventListener("click", function() {
  messagesSpan.classList.toggle("open")
  this.classList.toggle("shine")
  messagesDiv.classList.toggle("hide")
});
