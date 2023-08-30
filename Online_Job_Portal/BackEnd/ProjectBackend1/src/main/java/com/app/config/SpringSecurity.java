package com.app.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SpringSecurity {
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

//	@Bean
//	public SecurityFilterChain myAuthorization(HttpSecurity http) throws Exception {
//		http.csrf().disable().authorizeHttpRequests() // simply tell spring sec , to authorize all reqs
//				.antMatchers("/products/view", "/swagger*/*", "/v/api-docs/**", "/user/create", "/user/login",
//						"/user/authenticate", "/user/update*/*", "/user/delete/*", "/user/**", "/user/all")
//				.permitAll()
////				.anyRequest() // any other remaining end points
////				.authenticated() // must be : must be
//				.and() // bridge
//				.httpBasic(); // support Basic authentication
//
//		
//		
//		
////		.antMatchers("/products/view", "/swagger*/*", "/v/api-docs/**", "/user", "/user/login",
////        "/user/authenticate", "/update/*", "/delete/*")
//
//		return http.build();
//	}

//	@Bean
//	public InMemoryUserDetailsManager userDetailsManager(){
//		UserDetails user=User.withDefaultPasswordEncoder()
//				.username("user")
//				.password("password")
//				.roles("USER")
//				.build();
//		
//		UserDetails admin=User.withDefaultPasswordEncoder()
//				.username("admin")
//				.password("password")
//				.roles("ADMIN")
//				.build();
//		return new InMemoryUserDetailsManager(user,admin);
//		
//	}
//	
	@Bean
	public SecurityFilterChain myAuthorization(HttpSecurity http) throws Exception {
		return http.csrf(csrf -> csrf.disable()).authorizeRequests(auth -> {
			auth.antMatchers("/swagger*/*", "/v/api-docs/**", "/user/all").permitAll();
			auth.antMatchers("/admin/**").permitAll();
			auth.antMatchers("/freelancer/**").permitAll();
			auth.antMatchers("/recruiter/**").permitAll();
//					auth.antMatchers("/user/**").hasRole("USER");
//					auth.antMatchers("/admin").hasRole("ADMIN");
		}).httpBasic(Customizer.withDefaults()).build();
	}

//	@Bean
//	public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
//		return configuration.getAuthenticationManager();
//	}

}