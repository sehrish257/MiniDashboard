let parent= document.querySelector('#parent')
let para= document.querySelector('#para')
  
async function DataFetch() {
    para.className = "text-blue-500 text-xl font-semibold animate-pulse";
    para.innerHTML="\u23F3 Loading dashboard data ..."
   try{
    const [users, posts, comments]= await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users"),
        fetch("https://jsonplaceholder.typicode.com/posts"),
        fetch("https://jsonplaceholder.typicode.com/comments")
    ])  
    const userData= await users.json()
    const postData = await posts.json()
    const commentData = await comments.json()
    para.className=" "
    para.innerHTML=" "

    let table = document.createElement("table")
    let row = document.createElement("tr")
    let heading1 = document.createElement("th")
    let heading2 = document.createElement("th")
    let heading3= document.createElement("th")

    heading1.innerHTML="Number of users"
    heading2.innerHTML="Number of posts"
    heading3.innerHTML="Number of comments"

    let row2 = document.createElement("tr")
    let userCell = document.createElement("td")
    userCell.innerHTML=` ${userData.length}`
      
    let postCell= document.createElement("td")
    postCell.innerHTML=` ${postData.length}`
   
    let commentCell = document.createElement("td")
    commentCell.innerHTML=`${commentData.length}`

    row.append(heading1,heading2, heading3)
    row2.append(userCell, postCell, commentCell) 
    table.appendChild(row)
    table.appendChild(row2)
    para.appendChild(table)
   
    table.className ="border border-grey-500 mt-3 border-separate border-spacing-x-4 border-spacing-y-2 "
   }
   catch(error){
       para.innerHTML = `<p> data loading failed </p>`
        console.error("❌ Fetch failed:", error);
   } 
}
 DataFetch()