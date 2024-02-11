// Function that gets all emails with the given label

function main() {
    const emails = getEmailsByLabel('RIJLES UPDATE', true);
    Logger.log(emails)
    Logger.log(emails[0].getBody())
}

function getEmailsByLabel(label, starred = false) {
    const threads = GmailApp.search(`label:${label}`);
    const emails = threads.map(thread => thread.getMessages());
    if (starred) {
        return emails.flat().filter(email => email.isStarred());
    }
    return emails.flat();
}

