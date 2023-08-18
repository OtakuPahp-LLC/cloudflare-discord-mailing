import { Env, PostalMail } from "./types";

export default async function getChannelId(email: PostalMail, env: Env): Promise<string | null> {
    // You can put more complex logic in here
    // Either return a Discord channel id, or null to drop the email
    //   If you want `null` to reject instead of silently dropping, modify
    //   `src/email.ts` by uncommenting the `message.setReject` line.
    //
    // Example: route emails to the partner inbox to a different channel
    // if(email.to[0].address === "partner@example.com") return "12345678901234567890";
    //
    // Example: one channel per sender, stored in KV (pseudo code)
    // let channelId = await env.KV.get(email.from.address);
    // if(!channelId) {
    //      channelId = await createChannel();
    //      await env.KV.put(email.from.address, channelId);
    // }
    // return channelId;
    //
    // Example: drop spam
    // if(email.text.includes("extended warranty")) return null;
    //
    //return env.CHANNEL_ID;

    let channelId = null;
    if(email.subject.includes("[New task]")) { channelId = "1049705538956562474"; }  // Codeable Prospecting
    if(email.subject.includes("[New comment]")) { channelId = "1040664628579012608"; } // Codeable Follow-ups
    if(email.to[0].address === "support@otakupahp.llc") { channelId = "1106248148080414862"; } // Client Support
    return channelId;
}
