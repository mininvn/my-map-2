WA.onInit().then(() => {
    console.log("Room id: ", WA.room.id);
    // Will output something like: 'https://play.workadventu.re/@/myorg/myworld/myroom', or 'https://play.workadventu.re/_/global/mymap.org/map.json"
  });
  
  
  WA.chat.sendChatMessage('Hello world', 'Mr Robot');
  WA.room.onEnterLayer("start").subscribe(() => {
    WA.chat.sendChatMessage("Hello!", "Mr Robot");
  });