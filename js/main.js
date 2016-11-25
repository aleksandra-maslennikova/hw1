let friend = { name: 'Olga',
               programmingSkills: ['java', 'js', 'html', 'css']
             };

let user =  { name: 'Sasha',
             lastName: 'Maslennikova',
             dayOfBirth: 21,
             monthOfBirth: 6,
             yearOfBirth: 1985,
             programmingSkills: ['js', 'html', 'css'],
            };
user.friend = friend;

console.log(user);
console.log(user.friend);