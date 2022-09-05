const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eb46e5a80amsh3513d5e67afc749p1abe1djsn5ebae83e58c6',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};



function SelectCity(namecity){
	// let City = namecity

	fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${namecity}`, options)
	.then(response => response.json())
	// .then(response => ShowWeather())
	// .then(response => console.log(response))
	.then(response => {
		// console.log(response)
		// Location
		const CountryName = document.getElementById('CountryName')
		const Region = document.getElementById('Region')

		CountryName.innerText = response.location.country
		Region.innerText = response.location.name

		// Icon
		const icon = document.getElementById('icon')
		icon.setAttribute('src' , 'https://' + response.current.condition.icon)

		// Text weather
		const Textweather = document.getElementById('Text')
		Textweather.innerText = response.current.condition.text

		// Temp number
		const TempC = document.getElementById('Temp-C')
		TempC.innerText = response.current.temp_c

		// Wind Speed
		const WindSpeed = document.getElementById('Speed')
		WindSpeed.innerText = response.current.wind_kph

		// Wind Degree
		const WindDegree = document.getElementById('Degree')
		WindDegree.innerText = response.current.wind_degree

		// Humidity Value
		const HumidityValue = document.getElementById('Humidity-Value')
		HumidityValue.innerText = response.current.humidity

		// Update Time
		const UpdateTime = document.getElementById('Update-Time')
		UpdateTime.innerText = response.current.last_updated

		// Rain Amount
		const RainAmount = document.getElementById('Rain-Amount')
		RainAmount.innerText = response.current.precip_mm

		// UV Index
		const UVIndex = document.getElementById('Uv-Index')
		UVIndex.innerText = response.current.uv


		const Body = document.getElementById('Body')
		const Select = document.getElementById('Select')
		const ItemShow = document.getElementById('Item-Show')
		const LastUpdate = document.getElementById('Last-Update')
		const BoxShadowMore = document.getElementById('BoxShadowMore')

		if (response.current.is_day == 1){
			// Background
			Body.setAttribute('style' , 'background-image: url(BG/day.jfif);' + 'background-size: cover;' + 'color: black;')

			// Select Country
			Select.setAttribute('style' , 'color: black;')

			// Item Show box shadow
			ItemShow.setAttribute('style' , 'box-shadow: 5px 5px 10px rgb(0, 0, 0);')

			// Last Update box shadow
			LastUpdate.setAttribute('style' , 'box-shadow: 0 0 5px rgb(0, 0, 0);')

			// Box Shadow More
			BoxShadowMore.setAttribute('style' , 'box-shadow: 0 0 5px rgb(0, 0, 0);')
		}else{
			// Background
			Body.setAttribute('style' , 'background-image: url(BG/night.jfif);' + 'background-size: cover;' + 'color: white;')
			
			// Select Country
			Select.setAttribute('style' , 'color: white;')

			// Item Show box shadow
			ItemShow.setAttribute('style' , 'box-shadow: 5px 5px 10px rgb(255, 255, 255);')

			// Last Update box shadow
			LastUpdate.setAttribute('style' , 'box-shadow: 0 0 5px rgb(255, 255, 255);')

			// Box Shadow More
			BoxShadowMore.setAttribute('style' , 'box-shadow: 0 0 5px rgb(255, 255, 255);')
		}
	})
	.catch(err => console.error(err));
}


