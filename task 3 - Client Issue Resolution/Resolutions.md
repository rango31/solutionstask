# Client Resolutions

### Case 1
**The client has brought to our attention an issue concerning the final price displayed during their purchase. They bought one item for 35Kn and two items for 20Kn each, but the final price shown on the screen was 85Kn.**

*Here are the steps I would take to resolve this:*

- Verify the Transaction Details:
First, I would review the transaction records to ensure accuracy. This involves checking the items purchased, their quantities, and individual prices.
Confirm that the client indeed bought one item for 35Kn and two items for 20Kn each.
- Calculate the Expected Total Price:
Based on the client’s input, we can calculate the expected total price:
One item at 35Kn: 35Kn
Two items at 20Kn each: 40Kn (20Kn + 20Kn)
Total expected price: 35Kn + 40Kn = 75Kn
- Compare with the Displayed Price:
Next, I would compare the calculated expected total (75Kn) with the final price displayed on the screen (85Kn).
If there’s a discrepancy, we need to investigate further.
- Check for Additional Charges or Discounts:
Look for any additional charges (such as taxes, shipping fees, or service charges) that might have been added to the final price.
Verify if any discounts were applied during checkout.
- Collaborate with other departments:
If the issue persists, I would collaborate with the Frontend and Backend Teams
They can review the transaction logs, payment gateway details, and any adjustments made during the purchase process.
- Update the Client and Provide a Solution:
Based on the findings, we’ll communicate with the client promptly.
If there was an error, we’ll rectify it by adjusting the final price or providing a refund if necessary.
- Escalate if Needed:
If we cannot resolve the issue directly, we’ll escalate it to the relevant team (such as Quality Assurance) for further investigation.
Provide clear documentation of the issue and steps taken so far.
- Collaboration with Other Teams:

If additional expertise is required, I would collaborate with the following teams:
- Backend Team: To verify payment details and resolve any billing-related issues in the backend.
- Frontend Team: To investigate any technical glitches in the frontend.
- Customer Support Team: To keep them informed and ensure consistent communication with the client.

### Case 2
**A client has reported difficulty in logging in despite providing the correct username and password combination. In addition, when attempting to reset the password through the "Forgot password?" feature, they are not receiving the recovery email with the link.**

*Here are the steps I would take to resolve this:*

- Verify User Credentials:
First, I would double-check the client’s provided username and password combination.
Ensure that the username is correctly entered (case-sensitive) and that the password is accurate.
I would also try loging in from a different account to see if the issue is system wide.
- Check for Account Lockout or Suspensions:
Verify if the client’s account is locked due to multiple failed login attempts.
If there’s a lockout, unlock the account or wait for the lockout period to expire.
- Investigate Email Delivery Issues:
Since the client is not receiving the recovery email, we need to troubleshoot email delivery.
Check the spam or junk folder in the client’s email account.
Confirm that the email address associated with the account is correct.
- Test the “Forgot Password?” Feature:
As part of the investigation, I would simulate the password reset process.
Initiate a password reset request using the “Forgot password?” link.
Monitor the system logs to see if the recovery email is generated and sent.
- Collaborate with Backend Team:
If the recovery email is not being sent, collaborate with the Backend and Quality Assurance team.
They can check the email server logs, SMTP configuration, and any issues related to email delivery.
- Check Email Service Provider Settings:
Ensure that the email service provider (ESP) is functioning correctly.
Verify DNS records (MX records) for the domain associated with the recovery email.
- Resend Recovery Email Manually:
If necessary, manually trigger the recovery email to the client.
Confirm that the link in the email is valid and leads to the password reset page.
- Update the Client and Provide a Solution:
Communicate with the client about the progress of the investigation.
If the issue is resolved, guide them through the password reset process.
- Escalate if Needed:
If the issue persists, escalate it to the relevant team (Quality Assurance and backend).
Document the steps taken and share relevant information for further investigation.
Collaboration with Other Teams:

- Backend Team: To address technical issues related to email delivery and account management.
- Customer Support Team: Keep them informed and maintain consistent communication with the client.

### Case 3

**A customer is encountering issues during the payment stage, with the screen freezing when attempting to complete the process, despite trying all available payment methods.**

*Here are the steps I would take to resolve this:*

- Check for Common Causes of Screen Freezing:
Screen freezing can occur due to various reasons, including hardware issues, software glitches, or insufficient resources.
Verify if the customer’s device meets the system requirements for the payment process.
- Restart the Device:
Ask the customer to perform a soft reboot by holding down the power button for about 30 seconds to restart the device.
Sometimes, a simple restart can resolve freezing issues.
- Review Payment Processor Logs:
Investigate the payment processor logs for any errors or anomalies during the transaction.
Look for patterns that might trigger freezes, such as high transaction amounts or frequent chargebacks.
- Collaborate with Payment Processor Support:
Reach out to the payment processor’s support team.
Provide them with relevant details about the freezing issue and ask for their assistance in diagnosing and resolving it.
- Check for Account Lockout or Suspensions:
Verify if the customer’s account is locked due to suspicious activity.
- Test Different Payment Methods:
Ask the customer to try different payment methods (credit card, PayPal, etc.).
If the freezing occurs consistently with all methods, it’s likely a system-related issue.
- Monitor System Resources:
During the payment process, monitor CPU, memory, and disk usage.
High resource utilization can lead to freezing.
- Escalate to Backend Team:
If the issue persists, escalate it to the Backend team.
They can investigate technical aspects related to the payment system.
- Provide Clear Communication to the Customer:
Keep the customer informed about the progress of the investigation.
Apologize for any inconvenience caused and assure them that you’re working to resolve the issue.

- Collaboration with Other Teams:

Payment Processor Support: For insights into transaction logs and system behavior.
Backend and Frontend Team: To address technical glitches related to payment processing.
Customer Support Team: Maintain consistent communication with the customer and provide updates.

### Case 4
**A customer has reported receiving the "Amount Due" email as expected. However, they mentioned that the wording hasn't been displayed correctly, preventing them from seeing the actual amount they need to pay. Instead, the email only reads "{amunt_due}."**
**

- Review the Email Template:
First, I would examine the email template used for sending the “Amount Due” notification.
Check if there are any placeholders or variables that should be replaced with actual values.
- Check Variable Substitution:
Verify that the system is correctly substituting the actual amount due in place of “{amunt_due}” before sending the email.
If there’s an issue with variable substitution, it needs to be fixed.
- Collaborate with the Backend Team:
Reach out to the team responsible for email templates and communication.
Inform them about the specific issue reported by the customer.
- Inspect the Email Sending Process:
Investigate the backend process that generates and sends the “Amount Due” emails.
Ensure that the correct variable (representing the actual amount) is being used.
- Test the Email Template:
Manually trigger an “Amount Due” email for testing purposes.
Confirm that the placeholder is replaced with the correct value.
- Update the Email Content:
If the issue is confirmed, update the email template to display the actual amount due.
Replace “{amunt_due}” with the appropriate variable (e.g., “{amount_due}”).
- Notify the Customer:
Communicate with the customer, apologize for the inconvenience, and explain that the issue has been resolved.
Provide the correct amount due in a follow-up email.
- Escalate if Needed:
If the issue persists or if there are technical challenges, escalate it to the relevant team (email support, development, or QA).
Collaboration with Other Teams:

Backend Team: To fix the template and ensure proper variable substitution.
Backend Team: For any technical adjustments related to email generation.
Customer Support Team: Keep them informed and maintain consistent communication with the customer.