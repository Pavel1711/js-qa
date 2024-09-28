include .env

notification:
	curl --request POST \
		--url https://api.telegram.org/bot${TOKEN}/sendMessage \
		--header 'Content-Type: application/json' \
		--data '{"chat_id": "${CHAT_ID}","text": "Message"}'