let localStream;
let remoteStream;
let peerConection;

const servers={
    iceServers:[
        {
            //setting up constant variables for stun servers 
            urls:['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302']
        }
    ]
}

let init = async () =>{
    //declaration of an asynchronous arrow function in JavaScript that asks to share video and audio streams and display them 
    localStream = await navigator.mediaDevices.getUserMedia({video:true,audio:false});
    document.getElementById('user-1').srcObject = localStream

    createOffer()
}

let createOffer = async () =>{
    //creates an offer function that connects the 2 peer systems together 
    peerConection = new RTCPeerConnection(servers)

    remoteStream = new MediaStream()
    document.getElementById('user-2').srcObject = remoteStream

    localStream.getTracks().forEach((track) => {
        peerConnection.addTrack(track, localStream)
    })


    let offer = await peerConnecction.createOffer()
    await peerConnection.setLocalDescription(offer)
    //initiate the process of establishing a connection between peers using WebRTC

    console.log('Offer: ',offer)
}


init()