const rearrangingDuration = 350;

class DragandDrop{
    constructor(){
        this.dragDestIndex=null;
        this.draggedEl=null;
        this.draggedElIndex=null;
        this.rearranging = false;
        
        this.draggableElArr = document.querySelectorAll('.updateStory__userPageInfo');

        document.querySelectorAll('.updateStory__userPageInfo').forEach(elem=>{
            elem.addEventListener('dragstart',this.handleDragStart.bind(this),false);
            elem.addEventListener('dragend',this.handleDragend.bind(this),false);
            elem.addEventListener('dragover',this.handleDragOver.bind(this),false);
            elem.addEventListener('drop',this.handleDrop.bind(this),false);
            elem.addEventListener('touchstart',this.handleDragStart.bind(this),false);
            //elem.addEventListener('touchcancel',this.handleDragend.bind(this),false);
            elem.addEventListener('touchend',this.handleDragend.bind(this),false);
            elem.addEventListener('touchmove',this.handleDragOver.bind(this),false);
            elem.addEventListener('touchover',this.handleDrop.bind(this),false);
        })

        this.init();
    }
    init(){
        this.arrangeItems(this.draggableElArr,4,'.updateStory__grid')
    }
    arrangeItems(itemEls,columnsCount,containerEl,elHeight){
        let containerElem = document.querySelector(containerEl);

        let elWidth = containerElem.offsetWidth / columnsCount;
        elHeight = elHeight || elWidth;

        for(let i=0;i<itemEls.length;i++){
            let item = itemEls[i];
            item.dataset.index =i;
            let pos ={
                x:(i%columnsCount),
                y:Math.floor(i/columnsCount)
            }
            
            item.style.top = pos.y*elHeight+'px',
            item.style.left = pos.x * elWidth +'px',
            item.style.setProperty('width','calc(' + (100 / columnsCount) + '% - 10px)');
            item.style.setProperty('height','calc(' + elHeight + 'px - 10px)');
            item.style.boxSizing='border-box'
            
 
        }
    }

    rearrangeItems(arr,movedItemIndex,destinationIndex){
        let moveEl = arr.splice(movedItemIndex,1)[0];
        arr.splice(destinationIndex,0,moveEl);
        return arr;
    }

    handleDragStart(e){

        this.draggedEl = e.currentTarget;

        let sortedArr = [];
        for (let i=0; i<this.draggableElArr.length;i++){
            let elIndex = this.draggableElArr[i].dataset.index;
            sortedArr[elIndex]=this.draggableElArr[i];
        }
        this.draggableElArr = sortedArr;
        this.draggedElIndex = this.draggedEl.dataset.index;

        this.draggedEl.style.opacity = 0.3;
        this.draggedEl.style.transition='all 100ms ease';
    }

    handleDragend(e){
        e.preventDefault();
        e.currentTarget.style.opacity =1;
        e.currentTarget.style.transition = 'all 700ms ease';
    }

    handleDragOver(e){
        e.preventDefault();
        if(this.rearranging){
            return;
        }

        let dragDestIndex = e.currentTarget.dataset.index;

        this.draggedElIndex = this.draggedEl.dataset.index;
        if(this.draggedElIndex !== dragDestIndex){
            this.rearranging = true;
            let rearrangeEls = this.rearrangeItems(this.draggableElArr,this.draggedElIndex,dragDestIndex);
            this.arrangeItems(rearrangeEls,4,'.updateStory__grid');
            setTimeout(()=>{rearranging=false},rearrangingDuration)
        }


    }
    handleDrop(e){
        e.preventDefault();
        this.rearranging=false;
    }
}

window.onload = () =>{
    new DragandDrop();
}