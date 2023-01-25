package learn.atliens.domain;

import learn.atliens.model.ForumPost;
import learn.atliens.repo.ForumPostRepo;
import learn.atliens.repo.WordFileRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@SpringBootTest
@AutoConfigureMockMvc
class ForumPostServiceTest {

    @MockBean
    ForumPostRepo repo;

    @Autowired
    ForumPostService service;

    @Test
    void addForumPost() {
        ForumPost post = new ForumPost();
        post.setName("Cool");

        when(repo.addForumPost(post)).thenReturn(post);

        Result<ForumPost> result = service.addForumPost(post);

        assertTrue(result.isSuccess());
    }

    @Test
    void findAllPosts() {
        ForumPost post = new ForumPost();
        post.setName("Cool");
        repo.addForumPost(post);

        ForumPost post2 = new ForumPost();
        post.setName("Nice");
        repo.addForumPost(post2);
        List<ForumPost> posts = List.of(post, post2);

        when(repo.findAllPosts()).thenReturn(posts);

        assertTrue(posts.size() == 2);
    }

    @Test
    void deletePostById() {
        ForumPost post = new ForumPost();
        post.setName("Cool");
        repo.addForumPost(post);

        ForumPost post2 = new ForumPost();
        post2.setName("Nice");
        post2.setForumPostID("2");
        repo.addForumPost(post2);
        List<ForumPost> posts = List.of(post, post2);

        when(repo.deletePostById(post2.getForumPostID())).thenReturn("Post Deleted!");

        Result<ForumPost> result = service.deletePostById("2");

        assertTrue(result.isSuccess());
    }
}