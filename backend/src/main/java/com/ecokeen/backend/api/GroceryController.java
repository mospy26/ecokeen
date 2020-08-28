package com.ecokeen.backend.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("api/v1/groceries")
@RestController
public class GroceryController {

//    @Autowired // This means to get the bean called userRepository
//    // Which is auto-generated by Spring, we will use it to handle the data
//    private UserRepository userRepository;
//
//    @PostMapping(path="/add") // Map ONLY POST Requests
//    public @ResponseBody String addNewUser (@RequestParam String name
//            , @RequestParam String email) {
//        // @ResponseBody means the returned String is the response, not a view name
//        // @RequestParam means it is a parameter from the GET or POST request
//
//        User n = new User();
//        n.setName(name);
//        n.setEmail(email);
//        userRepository.save(n);
//        return "Saved";
//    }
//
//    @GetMapping(path="/all")
//    public @ResponseBody Iterable<User> getAllUsers() {
//        // This returns a JSON or XML with the users
//        return userRepository.findAll();
//    }
//
//    @Autowired
//    public PersonController(PersonService personService) {
//        this.personService = personService;
//    }
//
//    @PostMapping
//    public void addPerson(@Validated @NonNull @RequestBody Person person) {
//        personService.addPerson(person);
//    }
//
//    @GetMapping
//    public List<Person> getAllPeople() {
//        return personService.getAllPeople();
//    }
//
//    @GetMapping(path = "{id}")
//    public Person getPersonByID(@PathVariable("id") UUID id) {
//        return personService.getPersonById(id).orElse(null);
//    }
//
//    @DeleteMapping(path = "{id}")
//    public void deletePersonById(@PathVariable("id") UUID id) {
//        personService.deletePerson(id);
//    }
//
//    @PutMapping(path = "{id}")
//    public void updatePerson(@PathVariable("id") UUID id, @Validated @NonNull @RequestBody Person personToUpdate) {
//        personService.updatePerson(id, personToUpdate);
//    }

}