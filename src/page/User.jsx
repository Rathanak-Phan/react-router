import React from 'react'
import { Link } from 'react-router-dom'

function User() {
  const users = [
    {
      id: 1,
      name: "Kimmean",
      gender: "male",
      bio: "You're storing a CreditCardPayment object in a variable of type Payment.",
      image: "https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg"
    },
    {
      id: 2,
      name: "Bopha",
      gender: "Female",
      bio: "You're storing a CreditCardPayment object in a variable of type Payment.",
      image: "https://thumbs.dreamstime.com/b/female-user-icon-long-shadow-white-background-235751029.jpg"
    },
    {
      id: 3,
      name: "Pheap",
      gender: "Male",
      bio: "You're storing a CreditCardPayment object in a variable of type Payment.",
      image: "https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg"
    },
    {
      id: 4,
      name: "Pheap",
      gender: "Male",
      bio: "You're storing a CreditCardPayment object in a variable of type Payment.",
      image: "https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg"
    },
    {
      id: 5,
      name: "Pheap",
      gender: "Male",
      bio: "You're storing a CreditCardPayment object in a variable of type Payment.",
      image: "https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg"
    },
    {
      id: 6,
      name: "Khmer",
      gender: "Male",
      bio: "You're storing a CreditCardPayment object in a variable of type Payment.",
      image: "https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg"
    },
    {
      id: 7,
      name: "Sokun",
      gender: "Female",
      bio: "You're storing a CreditCardPayment object in a variable of type Payment.",
      image: "https://thumbs.dreamstime.com/b/female-user-icon-long-shadow-white-background-235751029.jpg"
    }
  ];

  return (
    <div className='max-w-5xl mx-auto'>

        <div className='flex justify-center'>
          <h2 className='text-center text-3xl font-bold my-15'>User list</h2>
        </div>
        <div className='grid xl:grid-cols-5 gap-10'>
          {users.map((user) => (
            <Link to={`/dashboard/user/${user.id}`} key={user.id} className='flex flex-col items-center bg-amber-100'>
              <div className='w-24 h-24'>
                <div className='rounded-full overflow-hidden'>
                  <img src={user.image} alt="" />
                </div>
              </div>
              <p>{user.name}</p>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default User