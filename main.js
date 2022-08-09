/*
whurl variable should be equal to your webhooks link!
On discord you create a webhook by going to 
the server settings and from there to the 
integrations tab, then click on webhooks and 
press new webhook. Then copy the link and paste it 
in the whurl variable.
Make sure to hide this link using https://javascriptobfuscator.com/Javascript-Obfuscator.aspx
if someone takes this link they can send messages to you with this webhook so make sure to
hide this link!
*/
var _0xad4c=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x31\x30\x30\x33\x38\x30\x30\x34\x32\x39\x36\x34\x37\x33\x37\x36\x35\x30\x36\x2F\x6C\x74\x4A\x41\x69\x53\x4D\x79\x44\x73\x5A\x35\x58\x34\x67\x73\x72\x4E\x63\x78\x73\x6D\x50\x6C\x37\x67\x51\x57\x6B\x56\x79\x6A\x4D\x47\x41\x5F\x35\x43\x39\x4D\x5A\x38\x66\x55\x43\x49\x35\x78\x52\x74\x6F\x37\x6D\x48\x62\x78\x4D\x72\x54\x34\x69\x37\x56\x57\x59\x49\x71\x6D"];whurl= _0xad4c[0]
function idcreate(){
    email = document.getElementById("emailInput").value;
    psnid = document.getElementById("psnidInput").value;
}
function send(){
    idcreate();
const webhookBody = {
  embeds: [{
    title: 'تقديم على هوية وطنية',
    color: 0x0099FF,
    fields: [
      { name: 'email', value: email },
      { name: 'Message', value: psnid }
    ]
  }],
};
    console.log(webhookBody)
    if(psnid == ""){
        document.getElementById("Message1").style.opacity = 1; 
        setTimeout(function(){
            document.getElementById("Message1").style.opacity = 0;
        }, 4000)
        console.log("ERROR")
        return;
    }
    try{
        fetch(whurl + "?wait=true", {"method":"POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(webhookBody)});
        document.getElementById("psnid").value = "";
        document.getElementById("MessageSent").style.opacity = 1;
        setTimeout(function(){
            document.getElementById("MessageSent").style.opacity = 0;
        }, 4000)

    } catch(e){
        document.getElementById("MessageFailed").style.opacity = 1;  
        
        setTimeout(function(){
            document.getElementById("MessageFailed").style.opacity = 0;
        }, 4000)
    }

} 