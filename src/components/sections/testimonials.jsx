import React from 'react'

export const Testimonials = () => {
  const testimonials = [
    { name: 'Peter Mwangi', role: 'Manager', quote: 'Great selection and amazing customer service!' },
    { name: 'John K.', role: 'Buyer', quote: 'Quality products at unbeatable prices.' },
    { name: 'Lynn .A. S.', role: 'Test driver', quote: 'I find best car experience that my clients love.' },
  ]

  return (
   <section>
  <div class="flex flex-col md:flex-row justify-center items-center h-screen">
  <div class="md:w-1/2 p-8">
    <h1 class="text-3xl font-bold mb-4">What People Are Saying About Us</h1>
    <div class="flex items-center mb-4">
      <img src="https://i.pinimg.com/736x/22/5f/4c/225f4c968155fcd81cc89182f673583b.jpg" alt="Josh Smith" class="rounded-full mr-4 w-[100px]" />
      <div>
        <h2 class="text-lg font-bold">John Hamilton</h2>
        <p class="text-gray-500">Manager of Sony Company</p>
      </div>
    </div>
    <p class="text-gray-700">"They are have a perfect touch for make something so professional, interest and useful for a lot of people."</p>
  </div>
  <div class="md:w-1/2 p-8">
    <img src="https://i.pinimg.com/736x/e9/a5/4d/e9a54d828874900b75bb3d39279cba9b.jpg" alt="Living Room" class="w-full h-auto" />
  </div>
</div>
</section>
  )
}

export default Testimonials
