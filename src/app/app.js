import { BookWithReviews } from "./model";

/**
 * Parses passed books and reviews arrays to create an array of BookWithReviews object. Each row from books input array
 * should have a corresponding row in resulting array. For example, for following input data:
 *    books = [ { "id" : 101, "title" : "Some book title" } ]
 *    reviews = [ { "bookId" : 101, "author" : "John", "content" : "Great book!" } ];
 * It should return following result:
 *    result = [ { id: 101, title: "Some book title", reviews : [ { author: "John", content: "Great book!" }] } ];
 *
 * @param books - an array of input books, see 'src/app/dataset/books.json' for sample data.
 * @param reviews - an array of input reviews, see 'src/app/dataset/reviews.json' for sample data.
 * @returns {Array} - an array of BookWithReviews objects
 */
export function parseBooksData(books, reviews) {
  var booksWithReview=[];

  for(var b of books) {
    booksWithReview.push({"id":b.id,"title":b.title,"reviews":reviews.filter(r => b.id == r.bookId)})    
  }

  return booksWithReview;  // TODO: Implement
}

/**
 * Displays data from passed `books` array. For example, if books argument would have following value:
 *    books = [ { id: 101, title: "Some book title", reviews : [ { author: "John", content: "Great book!" }] } ];
 * then, following structure should be created under the parentNode:
 * <ol>
 *    <li>
 *      <span>Some book title</span>
 *      <ul>
 *        <li>Great book! by John</li>
 *      </ul>
 *    </li>
 * </ol>
 * @param parentNode - parent node for all books
 * @param booksWithReviews - an array of BookWithReviews objects.
 */
export function displayBooksWithReviews(parentNode, booksWithReviews) {
  var html="";
  if(booksWithReviews.length>0){
    html+="<ol>";  
     
    for (var bookReview of booksWithReviews) {
        html+="<li>";
        html+="<span>"+bookReview.title+"</span>";
        if( bookReview.reviews.length>0){
          html+="<ul>";
      
          for(var review of bookReview.reviews){
            
            html+="<li>"+review["content"]+" by "+review["author"]+"</li>";
          }
          html+="</ul>";
        }
        html+="</li>"
      }
      html+="</ol>";         
     
    }
    parentNode.innerHTML = html;
 
}