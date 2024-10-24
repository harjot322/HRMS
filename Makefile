.PHONY: build run stop clean deploy

build:
	docker-compose build

run:
	docker-compose up

stop:
	docker-compose down

clean:
	docker-compose down -v
	docker system prune -f

deploy:
	kubectl apply -f k8s/

minikube-start:
	minikube start
	minikube addons enable metrics-server
	minikube addons enable ingress

minikube-stop:
	minikube stop

k8s-deploy:
	kubectl apply -f k8s/