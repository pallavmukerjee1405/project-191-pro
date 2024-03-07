AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId:{default:"",type:"string"},
    },

    init:function(){
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
    },

    handleCoversListState:function(){
        const id=this.el.getAttribute("id");
        const coverId=["lotr","hp","lww","catcher_in_rye"];
        if(coverId.includes(id)){
            const coverContainer=document.querySelector("#cover-container");
            coverContainer.setAttribute("cursor-listener",{
                selectedItemId:id
            });

            this.el.setAttribute("material",{
                color:"#1565c0"
            });

        }
    },

    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handleCoversListState();
        });
    },

    handleMouseLeaveEvents: function () {
        // Mouse Leave Events
        this.el.addEventListener("mouseleave",()=>{
          const { selectedItemId } = this.data;
          if(selectedItemId){
            const el=document.querySelector(`#${selectedItemId}`);
            const id=el.getAttribute("id");
            if(id==selectedItemId){
              el.setAttribute("material",{
                color:"#fff"
              });
            }
          }
        });
        
    },
});