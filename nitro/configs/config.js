module.exports = {
    'app_name' : process.env.APP_NAME || 'Templater',
    'app_mode' : process.env.APP_MODE || 'publish',
    'resources_dir' : 'resources',
    'smart_router' : true,
    'host' : process.env.HOST || '0.0.0.0',
    'port' : parseInt(process.env.PORT) || 8080,
    'mix_config': {
        'data' : './data'
    }
}