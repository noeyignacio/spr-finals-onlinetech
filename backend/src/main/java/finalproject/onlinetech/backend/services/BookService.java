package finalproject.onlinetech.backend.services;

import finalproject.onlinetech.backend.domain.Backlog;
import finalproject.onlinetech.backend.domain.Book;
import finalproject.onlinetech.backend.domain.Genre;
import finalproject.onlinetech.backend.exceptions.GenreNotFoundException;
import finalproject.onlinetech.backend.repository.BacklogRepository;
import finalproject.onlinetech.backend.repository.BookRepository;
import finalproject.onlinetech.backend.repository.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private GenreRepository genreRepository;

    public Book addBook(String genreIdentifier, Book book) {

        try {
            Backlog backlog = backlogRepository.findByGenreIdentifier(genreIdentifier);
            book.setBacklog(backlog);
            Integer BacklogSequence = backlog.getBSequence();
            BacklogSequence++;

            backlog.setBSequence(BacklogSequence);

            book.setGenreSequence(backlog.getGenreIdentifier()+"-"+BacklogSequence);
            book.setGenreIdentifier(genreIdentifier);

//            if(book.getBookPriority() == 0 || book.getBookPriority() == null){
//                book.setBookPriority(3);
//            }

            if(book.getBookStatus() == "" || book.getBookStatus() == null ) {
                book.setBookStatus("READING..");
            }

            return bookRepository.save(book);
        } catch (Exception e) {
            throw new GenreNotFoundException("Genre Not Found!");
        }


    }

    public Iterable<Book> findBacklogById(String id) {

        Genre genre = genreRepository.findByGenreIdentifier(id);

        if(genre==null) {
            throw new GenreNotFoundException("Genre with ID: " +id+ " doesn't not exist!");
        }

        return bookRepository.findByGenreIdentifierOrderByBookPriority(id);
    }

    public Book findBookByGenreSequence(String backlog_id, String book_id) {

        Backlog backlog = backlogRepository.findByGenreIdentifier(backlog_id);
        if(backlog == null) {
            throw new GenreNotFoundException("Genre with ID: " +backlog_id+ " doesn't exist!");
        }

        Book book = bookRepository.findByGenreSequence(book_id);

        if(book == null) {
            throw new GenreNotFoundException("Book "+ book_id + " not found!");
        }

        if(!book.getGenreIdentifier().equals(backlog_id)) {
            throw new GenreNotFoundException("Book " +book_id+" does not exist in Genre ID: "+backlog_id);
        }

        return book;
    }

    public Book updateByGenreSequence(Book updatedBook, String backlog_id, String book_id) {
        Book book = findBookByGenreSequence(backlog_id, book_id);

        book = updatedBook;

        return bookRepository.save(book);
    }

    public void deleteBookByGenreSequence(String backlog_id, String book_id) {
        Book book = findBookByGenreSequence(backlog_id, book_id);

        bookRepository.delete(book);
    }

}
