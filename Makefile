.PHONY: build run test clean docker-build docker-run k8s-deploy

# Development
install:
	npm install

dev:
	npm run dev

build:
	npm run build

test:
	npm run test

clean:
	rm -rf node_modules
	rm -rf frontend/node_modules
	rm -rf backend/node_modules
	rm -rf frontend/dist
	rm -rf backend/dist

# Docker
docker-build:
	docker-compose build

docker-run:
	docker-compose up

docker-stop:
	docker-compose down

# Kubernetes
k8s-deploy:
	kubectl apply -f k8s/

k8s-delete:
	kubectl delete -f k8s/

# Minikube
minikube-start:
	minikube start
	minikube addons enable ingress
	minikube addons enable metrics-server

minikube-stop:
	minikube stop

# Monitoring
monitoring-deploy:
	kubectl apply -f monitoring/

monitoring-delete:
	kubectl delete -f monitoring/