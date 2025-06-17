
export default function decorate(block) {
  const textContainerBlock = block.children[0]?.firstElementChild;
  const imageContainerBlock = block.children[0]?.lastElementChild;
  textContainerBlock?.classList.add('text-container');
  imageContainerBlock?.classList.add('image-container');

    if (textContainerBlock && imageContainerBlock) {
      [...textContainerBlock.children].forEach((child) => {
        if (child.tagName === 'H2') {
          child.classList.add('heading');
        } else if (child.classList.contains('button-container')) {
          child.firstElementChild.classList.add('cta');
        } else if (child.tagName === 'P') {
          child.classList.add('description');
        } 
      });
    
      [...imageContainerBlock.children].forEach((child) => {
        if (child.tagName === 'PICTURE') {
          child.classList.add('image');
        }
      });
  }
}
