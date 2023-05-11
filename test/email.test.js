import { sendEmail } from "./email";
import nodemailer from "nodemailer";

jest.mock("nodemailer", () => ({
  createTransport: jest.fn(() => ({
    sendMail: jest.fn(() =>
      Promise.resolve({
        messageId: "testMessageId",
      })
    ),
  })),
}));

describe("sendEmail", () => {
  it("sends an email", async () => {
    const to = "test@example.com";
    const subject = "Test subject";
    const text = "Test text";

    // Create a mock function for createTransport
    const createTransportMock = jest.fn().mockReturnValue({
      sendMail: jest.fn(), // Mocking the sendMail function as well
    });

    // Replace the original createTransport with the mock
    nodemailer.createTransport = createTransportMock;

    console.log("attempting to send email");
    await sendEmail(to, subject, text);

    expect(nodemailer.createTransport).toHaveBeenCalled();
    expect(nodemailer.createTransport().sendMail).toHaveBeenCalledWith({
      from: "lewis",
      to: "test@example.com",
      subject: "Test subject",
      text: "Test text",
    });
  });
});
