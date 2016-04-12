export default {
    DIRECTORY: 'directory',
    OTHER: 'other',

    getByExtension: function(ext) {
        for (let i = 0; i < filetypes.length; i++)
            for (let j = 0; j < filetypes[i].exts.length; j++)
                if (filetypes[i].exts[j] === ext)
                    return filetypes[i].name;

        return this.OTHER;
    }
};

let filetypes = [
    {
        name: 'javascript',
        exts: ['js']
    },
    {
        name: 'html',
        exts: ['html', 'htm']
    }
];