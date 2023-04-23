const itemCategoryEl = document.querySelectorAll(".item")

console.log(`Number of categories: ${itemCategoryEl.length}`);

itemCategoryEl.forEach((item) => {
  let category = item.querySelector("h2").textContent 
  let elements = item.querySelectorAll("li").length
    console.log(`Category: ${category}`)
    console.log(`Elements: ${elements}`)    
})











