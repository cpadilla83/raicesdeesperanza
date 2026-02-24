CREATE TABLE `auth_sessions` (
	`id` varchar(64) NOT NULL,
	`userId` int NOT NULL,
	`userAgent` text,
	`ip` varchar(45),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`expiresAt` timestamp NOT NULL,
	`revokedAt` timestamp,
	CONSTRAINT `auth_sessions_id` PRIMARY KEY(`id`)
);
