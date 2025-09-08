const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: 'din@email.com',
    pass: 'app-password'
  }
});

// Email med vedhæftede filer
const emailMedFiler = {
  from: 'din@email.com',
  to: 'modtager@email.com',
  subject: 'Email med vedhæftede filer',
  text: 'Se vedhæftede filer',
  attachments: [
    {
      filename: 'dokument.pdf',
      path: './uploads/dokument.pdf'
    },
    {
      filename: 'billede.jpg',
      path: './images/billede.jpg'
    },
    {
      filename: 'data.txt',
      content: 'Dette er indhold genereret i koden'
    }
  ]
};

// Email med indlejrede billeder
const emailMedBilleder = {
  from: 'din@email.com',
  to: 'modtager@email.com',
  subject: 'Email med indlejrede billeder',
  html: `
    <h1>Velkommen!</h1>
    <p>Her er vores logo:</p>
    <img src="cid:logo" alt="Logo" style="width: 200px;">
    <p>Og her er et billede:</p>
    <img src="cid:billede1" alt="Billede" style="width: 300px;">
  `,
  attachments: [
    {
      filename: 'logo.png',
      path: './assets/logo.png',
      cid: 'logo' // Content-ID til brug i HTML
    },
    {
      filename: 'billede.jpg',
      path: './assets/billede.jpg',
      cid: 'billede1'
    }
  ]
};

// Send til flere modtagere
const masseEmail = {
  from: 'din@email.com',
  to: ['person1@email.com', 'person2@email.com'],
  cc: ['kopi@email.com'],
  bcc: ['blind-kopi@email.com'],
  subject: 'Nyhedsbrev',
  html: '<h1>Månedligt nyhedsbrev</h1><p>Her er månedens nyheder...</p>'
};

// Funktion til at sende med fejlhåndtering
async function sendAdvancedEmail(mailOptions: any, description: any) {
  try {
    console.log(`Sender ${description}...`);
    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ ${description} sendt: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error: any) {
    console.error(`❌ Fejl ved ${description}:`, error.message);
    return { success: false, error: error.message };
  }
}

// Send forskellige email typer
async function sendAllEmails() {
  await sendAdvancedEmail(emailMedFiler, 'email med filer');
  await sendAdvancedEmail(emailMedBilleder, 'email med billeder');
  await sendAdvancedEmail(masseEmail, 'masse email');
}

// Template-baseret email
function createTemplateEmail(navn: any, produkt: any, pris: any) {
  return {
    from: 'shop@dinbutik.dk',
    to: 'kunde@email.com',
    subject: `Tak for dit køb, ${navn}!`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h1 style="color: #333;">Tak for dit køb!</h1>
        <p>Kære ${navn},</p>
        <p>Vi bekræfter hermed dit køb af:</p>
        <div style="border: 1px solid #ddd; padding: 20px; margin: 20px 0;">
          <h3>${produkt}</h3>
          <p><strong>Pris: ${pris} DKK</strong></p>
        </div>
        <p>Vi sender dig en forsendelsesbekræftelse snart.</p>
        <p>Med venlig hilsen,<br>Dit Team</p>
      </div>
    `
  };
}

// Eksempel på brug af template
const ordreEmail = createTemplateEmail('Lars Hansen', 'MacBook Pro', '25.000');
sendAdvancedEmail(ordreEmail, 'ordre bekræftelse');

module.exports = { transporter, sendAdvancedEmail, createTemplateEmail };