Created by Tyler Kay

Programs:
	reccommendedSpotifyPlaylist.py
		(This program will create a recommended spotify playlist based off your top artists and tracks you listen to.)
	addSpotifyPlaylist.py
		(This program will create a playlist and add songs based on what you type via the command line.) 

Installations Required: 
	-Python	3+
	-Spotipy
		-pip install spotipy

Instructions:
1. Login to https://developer.spotify.com/dashboard/ and click on create an app to recieve a Client ID and Client Secret. In Edit Settings, set Redirect URIs to http://127.0.0.1:8080/.

2. Use the following commands in Powershell(Windows)/Terminal(Mac/Linux) to set the following environmental variables:
	For Windows:
		set SPOTIPY_CLIENT_ID='your-spotify-client-id'
		set SPOTIPY_CLIENT_SECRET='your-spotify-client-secret'
		set SPOTIPY_REDIRECT_URI='your-app-redirect-url'
		
		OR 
		Manually enter it in via control panel.
		In Control Panel, search environmental variable on the top right search bar
		and select "Edit the system environment variables"--> "Environmental Variables". 
		Under System variables, select New and enter the provided Variable name and variable Value 
	
	For Mac/Linux:
		export SPOTIPY_CLIENT_ID='your-spotify-client-id'
		export SPOTIPY_CLIENT_SECRET='your-spotify-client-secret'
		export SPOTIPY_REDIRECT_URI='your-app-redirect-url'

3. Login to your spotify account and locate to Account Overview. Enter the username into the username variable in recommendedSpotifyPlaylist.py.


After that, you're all set! Enjoy!
			