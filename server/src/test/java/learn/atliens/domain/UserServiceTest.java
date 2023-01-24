package learn.atliens.domain;

import static org.junit.jupiter.api.Assertions.*;

import learn.atliens.model.User;
import learn.atliens.repo.UserRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.mockito.Mockito.*;


@SpringBootTest
@AutoConfigureMockMvc
class UserServiceTest {

    @MockBean
    private UserRepo repo;

    @Autowired
    private UserService service;


    @Test
    void shouldAdd() {
        // Arrange
        User user1 = new User();
        user1.setUsername("Cody Banks");
        user1.setPassword("pass");
        user1.setAuthorities(List.of(new SimpleGrantedAuthority("ADMIN")));

        // 4. Stub a specific behavior.
        when(repo.add(user1)).thenReturn(user1);

        // Act
        UserResult result = service.add(user1);

        // Assert
        assertTrue(result.isSuccess());
    }

    @Test
    void shouldNotAddCodyBanks() {
        User user1 = new User();
        user1.setUsername("Cody Banks");
        user1.setPassword("pass");
        user1.setAuthorities(List.of(new SimpleGrantedAuthority("ADMIN")));

        // 4. Stub a specific behavior.
        when(repo.add(user1)).thenReturn(user1);
        when(repo.findAll()).thenReturn(List.of(user1));

        // Act
        UserResult user = service.add(user1);

        // Assert
        assertFalse(user.isSuccess());
    }

    @Test
    void shouldFindCodyBanks() {
        User user1 = new User();
        user1.setUsername("Cody Banks");
        user1.setPassword("pass");
        user1.setAuthorities(List.of(new SimpleGrantedAuthority("ADMIN")));

        // 4. Stub a specific behavior.
        when(repo.findByUsername("Cody Banks")).thenReturn(user1);

        // Act
        UserDetails user = service.loadUserByUsername("Cody Banks");

        // Assert
        assertTrue(user.getUsername().equals("Cody Banks"));
    }

}