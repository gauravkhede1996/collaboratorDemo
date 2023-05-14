class slideEngine{
    constructor(slideId,userEmail){
        this.slideBox=$(`#${slideId}`);
        this.userEmail=userEmail;
        this.socket=io.connect('http://localhost:5000');
        if(this.userEmail){
            this.connectionHandler();
        }
    }
    connectionHandler(){
        let self=this;
        this.socket.on('connect',function(){
            console.log('Connection eStablished using socket.io');
            self.socket.emit('join room',{
                user_email:self.userEmail,
                socketroom: 'slide'
            })
            self.socket.on('user_joined',function(data){
                console.log('a user joined',data);
            })
        })

        var canvas= document.getElementById('myCanvas');
        console.log(canvas," is the canvas")
        var ctx=canvas.getContext('2D');
        var initialImageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        // Helper function to compare two arrays for equality
        function arraysEqual(a, b) {
          if (a.length !== b.length) return false;
          for (var i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return false;
          }
          return true;
        }
        // Flag to track if the canvas is being modified
        var isCanvasChanged = false;
        // Add event listeners for canvas interactions
        canvas.addEventListener('mousedown', function() {
          isCanvasChanged = true;
        });
        canvas.addEventListener('mousemove', function() {
          if (isCanvasChanged) {
            var currentImageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
            if (!arraysEqual(initialImageData, currentImageData)) {
              self.socket.emit('canvas_changed',{
                currentImageData,
                user_email:self.userEmail,
                chatroom:'slide'
              }); // Emit the 'canvasChanged' event
            }
          }
        });
        canvas.addEventListener('mouseup', function() {
          isCanvasChanged = false;
        });
    }
}