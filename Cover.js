AFRAME.registerComponent("book-covers",{
    init:function(){

        this.placesContainer = this.el;
        this.createCards();

    },

    createCards: function () {
        const thumbNailsRef = [
          {
            id: "lotr",
            title: "The Lord Of the Rings by J.R.R Tolkien",
            url: "./covers/lotr.webp",
          },
          {
            id: "hp",
            title: "Harry Potter and the Philosopher's Stone by J.K Rowling",
            url: "./covers/hp.webp",
          },
    
          {
            id: "lww",
            title: "The Lion, The Witch & The Wardrobe by C.S Lewis",
            url: "./covers/lww.webp",
          },
          {
            id: "catcher_in_rye",
            title: "The Catcher in the Rye by J.D Salinger",
            url: "./covers/catcher_in_rye.webp",
          },
        ];

        let prevoiusXPosition = -60;
  
        for (var item of thumbNailsRef) {
            const posX = prevoiusXPosition + 25;
            const posY = 10;
            const posZ = -40;
            const position = { x: posX, y: posY, z: posZ };
            prevoiusXPosition = posX;
  
            // Border Element
            const borderEl=this.createBorder(position,item.id);
        
            // Thumbnail Element
            const posterEl=this.createPoster(item);
            borderEl.appendChild(posterEl);
       
            // Title Text Element
            const titleEl=this.createTitle(position,item);
            borderEl.appendChild(titleEl);
        
            this.placesContainer.appendChild(borderEl);
        }
    },
  
    createBorder: function(position,id){
      const entityEl=document.createElement("a-entity");
      entityEl.setAttribute("visible",true);
      entityEl.setAttribute("id",id);
      entityEl.setAttribute("geometry",{
        primitive:"plane",
        width:21,
        height:40,
      });
      entityEl.setAttribute("position",position);
      entityEl.setAttribute("material",{
        color:"#fff",
        opacity:1,
      });
      entityEl.setAttribute("cursor-listener",{})
  
      return entityEl;
  
    },
  
    createPoster: function(item){
      const entityEl=document.createElement("a-entity");
      entityEl.setAttribute("visible",true);
      entityEl.setAttribute("geometry",{
        primitive:"plane",
        width:20,
        height:28,
      });
      entityEl.setAttribute("position",{x:0,y:5,z:0.1});
      entityEl.setAttribute("material",{src:item.url});
  
      return entityEl;
    },
  
    createTitle: function(position,item){
      const entityEl=document.createElement("a-entity");
      entityEl.setAttribute("text",{
        font:"exo2bold",
        align:"center",
        width:70,
        color:"#e65100",
        value:item.title,
      });
      const elPosition=position;
      elPosition.y=-20;
      entityEl.setAttribute("position",elPosition);
      entityEl.setAttribute("visible",true);
      return entityEl;
    }

    
});