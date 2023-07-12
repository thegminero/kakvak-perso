const resultHit = (hit) => `<div class="relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
<a href="#">
  <img class="h-60 rounded-t-lg object-cover" src="	https://www.alkosto.com${hit?.['img-820wx820h_string']}" alt="product image" />
</a>
<span class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
<div class="px-5 pb-5">
  <a href="#" class="">
    <h5 class="text-md h-6 text-ellipsis overflow-hidden hover:text-clip tracking-tight text-blue-900">${hit.name_text_es}</h5>
  </a>
  <div class="mt-2.5 mb-5 flex items-center">
    <span class="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
  </div>
  <div class="flex items-center justify-between">
    <p>
      <span class="text-md font-bold text-slate-900">${hit.discountprice_double.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })}</span>
      <span class="text-sm text-red-600 line-through">${hit.pricevalue_cop_double.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })}</span>
    </p>
    <a href="#" class="flex items-center rounded-md bg-orange-500 px-2.5 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
      <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.75 5.25H6L6.34615 8.25M6.34615 8.25L7.5 15.75H17.25L18.75 8.25H6.34615Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 18.75L9.00788 18.75" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15 18.75L15.0079 18.75" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a
    >
  </div>
</div>
</div>`



// `<a class="result-hit">
//   <div class="result-hit__image-container">
//     <img class="result-hit__image" src="	https://www.alkosto.com${hit?.['img-155wx155h_string']}" />
//   </div>
//   <div class="result-hit__details">
//     <h3 class="result-hit__name">${hit.name_text_es}</h3>
//     <div class="result-hit__prices">
   
//     <p class="result-hit__price">$${hit.pricevalue_cop_double}</p>
//     </div>
//   </div>
//   <div class="result-hit__controls">
//     <button type="button" id="view-item" class="result-hit__view" data-query-id="${hit.__queryID}" data-object-id="${
//   hit.objectID
// }" data-price="${hit.price}" data-name="${hit.name_text_es}" data-image="${`https://imagescdn.simons.ca${hit.image}`}" data-description="${hit.description}">
//       <svg width="24px" height="24px" viewBox="0 0 24 24" id="magicoon-Regular" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:white;}</style></defs><title>eye</title><g id="eye-Regular"><path id="eye-Regular-2" data-name="eye-Regular" class="cls-1" d="M21.229,10.116C19.914,7.925,16.966,4.25,12,4.25S4.086,7.925,2.771,10.116a3.656,3.656,0,0,0,0,3.768C4.086,16.075,7.035,19.75,12,19.75s7.914-3.675,9.229-5.866h0A3.652,3.652,0,0,0,21.229,10.116Zm-1.286,3C18.792,15.031,16.228,18.25,12,18.25s-6.791-3.219-7.943-5.138a2.16,2.16,0,0,1,0-2.224C5.209,8.969,7.773,5.75,12,5.75s6.792,3.219,7.943,5.138A2.155,2.155,0,0,1,19.943,13.112ZM12,7.75A4.25,4.25,0,1,0,16.25,12,4.255,4.255,0,0,0,12,7.75Zm0,7A2.75,2.75,0,1,1,14.75,12,2.752,2.752,0,0,1,12,14.75Z"/></g></svg>
//     View</button>
//     <button type="button" class="result-hit__cart"  data-query-id="${hit.__queryID}" data-object-id="${
//   hit.objectID
// }" data-price="${hit.pricevalue_cop_double}" data-name="${hit.name_text_es}">
//     <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M3.75 5.25H6L6.34615 8.25M6.34615 8.25L7.5 15.75H17.25L18.75 8.25H6.34615Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//       <path d="M9 18.75L9.00788 18.75" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
//       <path d="M15 18.75L15.0079 18.75" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
//     </svg>
//     Add To Cart</button>
//   </div>
// </a>`;

export default resultHit;