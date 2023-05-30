
function load_continut(pagina){
            //document.getElementById("continut").innerHTML='<object class="obiect" type="text/html" data=' + pagina + ' ></object>';
            document.getElementById("continut").innerHTML='<iframe class="obiect" src=' + pagina + ' ><p>Your browser does not support iframes.</p></iframe>';
			
			iFrameResize({
				log                     : false,                  // Enable console logging
				enablePublicMethods     : true,                  // Enable methods within iframe hosted page
				checkOrigin				: false,
				resizedCallback         : function(messageData){ // Callback fn when resize is received
					$('p#callback').html(
						'<b>Frame ID:</b> '    + messageData.iframe.id +
						' <b>Height:</b> '     + messageData.height +
						' <b>Width:</b> '      + messageData.width + 
						' <b>Event type:</b> ' + messageData.type
					);
				},
				messageCallback         : function(messageData){ // Callback fn when message is received
					$('p#callback').html(
						'<b>Frame ID:</b> '    + messageData.iframe.id +
						' <b>Message:</b> '    + messageData.message
					);
					alert(messageData.message);
				},
				closedCallback         : function(id){ // Callback fn when iFrame is closed
					$('p#callback').html(
						'<b>IFrame (</b>'    + id +
						'<b>) removed from page.</b>'
					);
				}
			});
}		
function load_newpage(pagina){
            window.location.href = pagina;
			//document.getElementsByTagName('html')[0].innerHTML=file_get_contents(pagina);
}

function get(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}

function load_din_adresa(){
	// cauta si incarca pagina potrivita conforma parametrului transmis prin adresa url
	var arg=get('pagina');
	//confirm(arg);
	
	if(arg ){
		load_newpage(arg);
	}else{
		load_continut('main2.html');
	}
}
function load_din_adresa_fara_arg(){
	// cauta si incarca pagina potrivita conforma parametrului transmis prin adresa url
	var arg=get('pagina');
	//confirm(arg);
	if(arg ){
		load_newpage(arg);
	}
}


