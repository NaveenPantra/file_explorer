import { FILE, FOLDER } from "./../utils/constants";

export const INITIAL_CURRENT_PATH = ["root"];

export const INITAL_EXPLORER = {
  root: {
    content: {
      apps: {
        content: {},
        info: {
          type: "folder",
          name: "apps",
          size: "10Kb",
          "creator name": "Naveen Pantra",
          "created date": "12/12/2019",
          path: "root/apps"
        }
      },
      pictures: {
        content: {},
        info: {
          type: "folder",
          name: "pictures",
          size: "10Kb",
          "creator name": "Naveen Pantra",
          "created date": "12/12/2019",
          path: "root/pictures"
        }
      },
      videos: {
        content: {},
        info: {
          type: "folder",
          name: "videos",
          size: "10Kb",
          "creator name": "Naveen Pantra",
          "created date": "12/12/2019",
          path: "root/videos"
        }
      },
      docs: {
        content: {
          work: {
            content: {
              "e.pdf": {
                content: {},
                info: {
                  type: "file",
                  name: "e.pdf",
                  size: "10Kb",
                  "creator name": "Naveen Pantra",
                  "created date": "12/12/2019",
                  path: "root/docs/work"
                }
              },
              "f.ts": {
                content: {},
                info: {
                  type: "file",
                  name: "f.ts",
                  size: "10Kb",
                  "creator name": "Naveen Pantra",
                  "created date": "12/12/2019",
                  path: "root/docs/work"
                }
              }
            },
            info: {
              type: "folder",
              name: "work",
              size: "10Kb",
              "creator name": "Naveen Pantra",
              "created date": "12/12/2019",
              path: "root/docs/work"
            }
          },
          "c.pdf": {
            content: {},
            info: {
              type: "file",
              name: "c.pdf",
              size: "10Kb",
              "creator name": "Naveen Pantra",
              "created date": "12/12/2019",
              path: "root/docs"
            }
          },
          "d.docx": {
            content: {},
            info: {
              type: "file",
              name: "d.docx",
              size: "10Kb",
              "creator name": "Naveen Pantra",
              "created date": "12/12/2019",
              path: "root/docs"
            }
          }
        },
        info: {
          type: "folder",
          name: "docs",
          size: "10Kb",
          "creator name": "Naveen Pantra",
          "created date": "12/12/2019",
          path: "root/docs"
        }
      },
      "a.pdf": {
        content: {},
        info: {
          type: "file",
          name: "a.pdf",
          size: "10Kb",
          "creator name": "Naveen Pantra",
          "created date": "12/12/2019",
          path: "root"
        }
      },
      "b.jpg": {
        content: {},
        info: {
          type: "file",
          name: "b.jpg",
          size: "10Kb",
          "creator name": "Naveen Pantra",
          "created date": "12/12/2019",
          path: "root"
        }
      }
    },
    info: {
      type: "folder",
      name: "root",
      size: "100MB",
      "creator name": "Naveen Pantra",
      "created date": "12/12/2019",
      path: "root"
    }
  }
};

export const INITIAL_SEARCH_DATA = {
  root: {
    type: FOLDER,
    name: "root",
    path: ["root"],
    size: "100MB",
    "creator name": "Naveen Pantra",
    "created date": "12/12/2019",
    children: [
      "root/apps",
      "root/pictures",
      "root/videos",
      "root/docs",
      "root/a.pdf",
      "root/b.jpg"
    ]
  },
  "root/apps": {
    type: FOLDER,
    name: "apps",
    path: ["root", "apps"],
    size: "10Kb",
    "creator name": "Naveen Pantra",
    "created date": "12/12/2019",
    children: []
  },
  "root/pictures": {
    type: FOLDER,
    name: "pictures",
    path: ["root", "pictures"],
    size: "10Kb",
    "creator name": "Naveen Pantra",
    "created date": "12/12/2019",
    children: []
  },
  "root/videos": {
    type: FOLDER,
    name: "videos",
    path: ["root", "videos"],
    size: "10Kb",
    "creator name": "Naveen Pantra",
    "created date": "12/12/2019",
    children: []
  },
  "root/docs": {
    type: FOLDER,
    name: "docs",
    path: ["root", "docs"],
    size: "10Kb",
    "creator name": "Naveen Pantra",
    "created date": "12/12/2019",
    // children: []
    children: ["root/docs/work", "root/docs/c.pdf", "root/docs/d.docx"]
  },
  "root/a.pdf": {
    type: FILE,
    name: "a.pdf",
    path: ["root"],
    size: "10Kb",
    "creator name": "Naveen Pantra",
    "created date": "12/12/2019",
    children: []
  },
  "root/b.jpg": {
    type: FILE,
    name: "b.jpg",
    path: ["root"],
    size: "10Kb",
    "creator name": "Naveen Pantra",
    "created date": "12/12/2019",
    children: []
  },
  "root/docs/work": {
    type: FOLDER,
    name: "work",
    path: ["root", "docs", "work"],
    size: "10Kb",
    "creator name": "Naveen Pantra",
    "created date": "12/12/2019",
    children: ["root/docs/work/e.pdf", "root/docs/work/f.ts"]
  },
  "root/docs/c.pdf": {
    type: FILE,
    name: "c.pdf",
    path: ["root", "docs"],
    size: "10Kb",
    "creator name": "Naveen Pantra",
    "created date": "12/12/2019",
    children: []
  },
  "root/docs/d.docx": {
    type: FILE,
    name: "d.docx",
    path: ["root", "docs"],
    size: "10Kb",
    "creator name": "Naveen Pantra",
    "created date": "12/12/2019",
    children: []
  },
  "root/docs/work/e.pdf": {
    type: FILE,
    name: "e.pdf",
    path: ["root", "docs", "work"],
    size: "10Kb",
    "creator name": "Naveen Pantra",
    "created date": "12/12/2019",
    children: []
  },
  "root/docs/work/f.ts": {
    type: FILE,
    name: "f.ts",
    path: ["root", "docs", "work"],
    size: "10Kb",
    "creator name": "Naveen Pantra",
    "created date": "12/12/2019",
    children: []
  }
};
