<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '=oH9Ib:D>@2WGhdB17y+y[:^!.sApWM@m&w>R:rlhO%#EaMG~f6|$jTid5[U>0bU' );
define( 'SECURE_AUTH_KEY',  'm$E$D!fw1{V$7JM(a5=?6u[9X+d0bWXgz|Sbbf981RnBGC.sGn=bIuTp?bf;.i@0' );
define( 'LOGGED_IN_KEY',    'y~o~:;*3Z?>.|l>.`C2By=b(~{1D]xOhSh:S}%m>B 8Ou+C35+g(Qe<6THclia4S' );
define( 'NONCE_KEY',        '>(2NPy{>f!_pdc=+v2kGb!~a${#0ufkx9g1Rq7!*{W~DNvsg3BDuaF1/r})k5h~I' );
define( 'AUTH_SALT',        'vt?POj~wLxD.Jjvj3XU$_r|&]q1{!dEJ3Kdm3Uf[s?j+B4&Y*,qFTfj1.t3`Snab' );
define( 'SECURE_AUTH_SALT', '1UG`h6$Nz{v(RgT:} vS`XFa%E$du)2S63B4D2+COCTrh)czB})JNrR~*-CYRrv[' );
define( 'LOGGED_IN_SALT',   'zLIsX08%xKx?<F=vRF?Plf8$$P&u*Cl]d)AU-M0YQ>:Ibpr<0:u9Hi%Gl9v.]IZ(' );
define( 'NONCE_SALT',       'XXJDHRu%z*ZxIJ@VB?We8K+L]%5O*V3OBO~fMpf/`GScR7fjI|EF5FRpicG6q2}@' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_user';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
