// String input of IP address
function checkForInternetProtocol(input) {
      if(i.match(/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/gm)){
          console.log("IPv4");    
      }
      else if(i.match(/^[A-F0-9]{1,4}\:[A-F0-9]{1,4}\:[A-F0-9]{1,4}\:[A-F0-9]{1,4}\:[A-F0-9]{1,4}\:[A-F0-9]{1,4}\:[A-F0-9]{1,4}\:[A-F0-9]{1,4}$/igm)){
          console.log("IPv6");    
      }
      else{
          console.log( "Neither" );
      }
}
