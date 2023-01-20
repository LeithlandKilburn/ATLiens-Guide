package learn.atliens.model;


import com.amazonaws.services.dynamodbv2.datamodeling.*;
import learn.atliens.repo.AuthConverter;
import lombok.Data;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;

@Data
@DynamoDBTable(tableName = "users")
@lombok.NoArgsConstructor
public class User implements UserDetails {

    @DynamoDBHashKey
    @DynamoDBAutoGeneratedKey
    private String userId;

    @DynamoDBAttribute
    private String username;

    @DynamoDBAttribute
    private String password;

    @DynamoDBTypeConverted(converter = AuthConverter.class)
    @DynamoDBAttribute
    private List<SimpleGrantedAuthority> authorities; //TODO:

    @DynamoDBTyped(DynamoDBMapperFieldModel.DynamoDBAttributeType.BOOL)
    @DynamoDBAttribute
    private boolean enabled = true;

    @DynamoDBTyped(DynamoDBMapperFieldModel.DynamoDBAttributeType.BOOL)
    @DynamoDBAttribute
    private boolean accountNonExpired = true;

    @DynamoDBTyped(DynamoDBMapperFieldModel.DynamoDBAttributeType.BOOL)
    @DynamoDBAttribute
    private boolean accountNonLocked = true;

    @DynamoDBTyped(DynamoDBMapperFieldModel.DynamoDBAttributeType.BOOL)
    @DynamoDBAttribute
    private boolean credentialsNonExpired = true;

//    @Override
//    public Collection<GrantedAuthority> getAuthorities() {
//        return this.authorities.stream()
//                .map(r -> new SimpleGrantedAuthority(r))
//                .collect(Collectors.toList());
//    }

//    private static Collection<GrantedAuthority> convertRolesToAuthorities(List<String> roles) {
//        return roles.stream()
//                .map(r -> new SimpleGrantedAuthority(r))
//                .collect(Collectors.toList());
//    }
}
