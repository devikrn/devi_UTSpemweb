// contact.js
class Contact {
  constructor(phoneNumber, message) {
    this.phoneNumber = phoneNumber;
    this.message = message;
  }

  showContactInfo() {
    alert("Nomor: " + this.phoneNumber + "\n\nPesan: " + this.message);
  }
}

// Inisialisasi objek Contact
const contact = new Contact(
  "+1234567890",
);
