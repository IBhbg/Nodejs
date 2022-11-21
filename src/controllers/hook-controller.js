

export class HookController{

    index(req, res, next){
        req.body={
            description: req.body.object_attributes.title,
            done: false
        }
        next()
    }

    authorize(req, res, next){
        if(req.headers['x-gitlab-token'] !== process.env.HOOK_SECRET){
            res.status(403).send('Incorrect Secret')
            return
        }
        next()
    }
}
