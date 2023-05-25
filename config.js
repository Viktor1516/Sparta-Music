module.exports = {
    app: {
        token: 'NzA1NTAwMTU2MDU2ODI5OTky.GifXlZ.UUhOQqKykyuVT2gZBruLVpLWfpyM_9ZRERzf00',
        playing: 'by victor ❤️',
        global: true,
        guild: 'XXX'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
