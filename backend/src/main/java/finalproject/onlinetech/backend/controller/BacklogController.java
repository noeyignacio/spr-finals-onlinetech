package finalproject.onlinetech.backend.controller;

import finalproject.onlinetech.backend.domain.Book;
import finalproject.onlinetech.backend.services.BookService;
import finalproject.onlinetech.backend.services.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/backlog")
@CrossOrigin
public class BacklogController {

    @Autowired
    private BookService bookService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("/{backlog_id}")
    public ResponseEntity<?> addBookBacklog(@Valid @RequestBody Book book,
                                            BindingResult result, @PathVariable String backlog_id) {
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if (errorMap != null) {
            return errorMap;
        }

        Book book1 = bookService.addBook(backlog_id, book);

        return new ResponseEntity<Book>(book1, HttpStatus.CREATED);
    }

    @GetMapping("/{backlog_id}")
    public Iterable<Book> getBookBacklog(@PathVariable String backlog_id) {

        return bookService.findBacklogById(backlog_id);
    }

    @GetMapping("/{backlog_id}/{book_id}")
    public ResponseEntity<?> getBook(@PathVariable String backlog_id, @PathVariable String book_id) {

        Book book = bookService.findBookByGenreSequence(backlog_id, book_id);
        return new ResponseEntity<Book>(book, HttpStatus.OK);
    }


    @PatchMapping("/{backlog_id}/{book_id}")
    public ResponseEntity<?> updateBook(@Valid @RequestBody Book book, BindingResult result,
                                        @PathVariable String backlog_id, @PathVariable String book_id) {

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if (errorMap != null) {
            return  errorMap;
        }

        Book updatedBook = bookService.updateByGenreSequence(book, backlog_id, book_id);

        return new ResponseEntity<Book>(updatedBook, HttpStatus.OK);
    }

    @DeleteMapping("/{backlog_id}/{book_id}")
    public ResponseEntity<?> deleteBook(@PathVariable String backlog_id, @PathVariable String book_id) {
        bookService.deleteBookByGenreSequence(backlog_id, book_id);

        return  new ResponseEntity<String>("Book ID: "+book_id+" was delete successfully!", HttpStatus.OK);
    }
}