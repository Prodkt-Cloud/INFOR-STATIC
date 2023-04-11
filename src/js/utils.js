export function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }
  
  export function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
      timeZone: "UTC",
    })
  }
  
  export function formatLearningPaths(path, {
    filterOutDrafts = true,
    filterOutFuturePaths = true,
    sortByDate = true,
    limit = undefined,
  } = {}) {
  
    const filteredPaths = path.reduce((acc, path) => {
      const { date, draft } = path.frontmatter;
      
      // filterOutDrafts if true
      if (filterOutDrafts && draft) return acc;
  
      // filterOutFuturePaths if true
      if (filterOutFuturePaths && new Date(date) > new Date()) return acc;
  
      // add post to acc
      acc.push(path)
  
      return acc;
    }, [])
  
    // sortByDate or randomize
    if (sortByDate) {
      filteredPaths.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
    } else {
      filteredPaths.sort(() => Math.random() - 0.5)
    }
  
    // limit if number is passed
    if (typeof limit === "number") {
      return filteredPaths.slice(0, limit);
    }
    
    return filteredPaths;
  
  }